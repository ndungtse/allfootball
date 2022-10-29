import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest, res: NextResponse | any) {
    //verify token
    const token = request.headers.get('Authorization')
    if (!token) {
        return res.status(401).send('Unauthorized')
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - static (static files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|static|favicon.ico).*)',
    ],
}