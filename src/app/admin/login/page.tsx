'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || 'Login failed.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1A1821] text-[#E0D8F0] font-mono flex items-center justify-center p-4">
      <div className="w-full max-w-md border-4 border-[#907AD6] bg-[#262335] p-6 shadow-[8px_8px_0px_0px_#4F4670]">
        <div className="flex items-center gap-2 mb-6 border-b-2 border-dashed border-[#4F4670] pb-4">
          <h1 className="text-lg font-black tracking-wider">ADMIN AUTHENTICATION</h1>
        </div>

        {error && (
          <div className="border-2 border-[#FFB7B2] bg-[#4A262C] text-[#FFB7B2] p-3 text-xs font-bold mb-4">
             {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase">Admin Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full border-2 border-[#907AD6] bg-[#1A1821] p-2.5 text-xs text-white outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full border-2 border-[#907AD6] bg-[#1A1821] p-2.5 text-xs text-white outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full border-2 border-[#DABfff] bg-[#907AD6] py-3 text-xs font-black text-white shadow-[3px_3px_0px_0px_#DABfff] transition-all active:translate-y-0.5 disabled:opacity-50"
          >
            {loading ? 'AUTHENTICATING...' : 'ACCESS DASHBOARD'}
          </button>
        </form>
      </div>
    </main>
  );
}