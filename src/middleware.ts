import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const adminCookie = req.cookies.get('admin_session')?.value;
  const { pathname } = req.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (adminCookie !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // Redirect to dashboard if logged in and trying to visit login page
  if (pathname === '/admin/login' && adminCookie === 'authenticated') {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};