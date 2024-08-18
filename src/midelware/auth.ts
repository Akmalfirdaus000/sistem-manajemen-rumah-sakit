// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function isAuthenticated(request: NextRequest): boolean {
  const isLoggedInCookie = request.cookies.get('isLoggedIn')?.value; // Ambil nilai cookie
  return isLoggedInCookie === 'true'; // Periksa jika nilainya adalah 'true'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah path adalah bagian dari folder `features`
  if (pathname.startsWith('/features') && !isAuthenticated(request)) {
    // Jika tidak login, arahkan ke halaman login
    return NextResponse.redirect(new URL('/register/login', request.url));
  }

  // Jika sudah login atau path tidak termasuk dalam folder `features`, lanjutkan
  return NextResponse.next();
}

// Tentukan folder mana yang akan dipantau oleh middleware
export const config = {
  matcher: ['/features/:path*'],
};
