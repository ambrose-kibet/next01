import { NextResponse } from 'next/server';

export function middleware(req, ev) {
  console.log('middleware', req.url);
  return NextResponse.redirect(new URL('/', req.url));
}

// protected routes
export const config = {
  matcher: ['/about/:path*'],
};
