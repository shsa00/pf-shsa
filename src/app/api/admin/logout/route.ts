import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // Explicitly clear the correct cookie name shown in your DevTools
    cookieStore.set({
      name: 'admin_session',
      value: '',
      maxAge: 0,
      path: '/',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}