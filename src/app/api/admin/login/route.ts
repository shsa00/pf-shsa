import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const envEmail = process.env.ADMIN_EMAIL;
    const envPassword = process.env.ADMIN_PASSWORD;

    if (email === envEmail && password === envPassword) {
      const response = NextResponse.json({ success: true });

      // Set a secure HTTP-only authentication cookie
      response.cookies.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return response;
    }

    return NextResponse.json(
      { error: 'Invalid email or password.' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: 'An error occurred during authentication.' },
      { status: 500 }
    );
  }
}