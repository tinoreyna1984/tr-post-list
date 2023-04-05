import { NextResponse } from "next/server";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

export default function middleware(req) {
    let verify = req.cookies.get("token");
    let url = req.url

    if (!verify && url.includes('/main')) {
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify && url === "http://localhost:3000/") {
        return NextResponse.redirect("http://localhost:3000/main");
    }


}

