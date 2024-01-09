import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const islogin = false;

  if (!islogin) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/dashboardAdmin/:path*", "/dashboardUser/:path*"],
};
