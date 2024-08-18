// src/app/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const isLoggedInCookie = cookieStore.get('isLoggedIn');

  // Memeriksa apakah cookie 'isLoggedIn' ada dan nilainya adalah 'true'
  const isLoggedIn = isLoggedInCookie?.value === 'true';

  // Jika tidak login dan mencoba mengakses halaman dashboard
  if (!isLoggedIn && request.nextUrl.pathname.startsWith('/features/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Hanya berlaku untuk rute di dalam folder 'features'
export const config = {
  matcher: ['/features/:path*'],
};
