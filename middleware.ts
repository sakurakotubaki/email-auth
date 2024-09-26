// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   try {
//     console.log('Middleware called for path:', request.nextUrl.pathname);

//     const authCookie = request.cookies.get('auth_token')
//     console.log('Auth cookie present:', !!authCookie, 'Cookie value:', authCookie?.value);

//     const isAuthPage = request.nextUrl.pathname === '/signin' || request.nextUrl.pathname === '/signup'
//     const isProtectedRoute = request.nextUrl.pathname.startsWith('/(auth)') || request.nextUrl.pathname === '/home'

//     console.log('Is auth page:', isAuthPage);
//     console.log('Is protected route:', isProtectedRoute);

//     if (isAuthPage) {
//       console.log('Allowing access to auth page');
//       return NextResponse.next()
//     }

//     if (isProtectedRoute && !authCookie) {
//       console.log('Redirecting to signin page due to missing auth cookie');
//       return NextResponse.redirect(new URL('/signin', request.url))
//     }

//     console.log('Allowing access to requested page:', request.nextUrl.pathname);
//     return NextResponse.next()
//   } catch (error) {
//     console.error('Middleware error:', error)
//     return NextResponse.redirect(new URL('/error', request.url))
//   }
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }