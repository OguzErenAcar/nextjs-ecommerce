import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("Auth"); // ← doğru cookie adı
  
  const path = req.nextUrl.pathname;

  if (path.startsWith("/profile")) {
    if (!token) {
      return NextResponse.redirect(new URL("/404", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/profile/:path*",
};
