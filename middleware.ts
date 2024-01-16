import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

const protectedRoutes = ["/cart", "/profile"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();


  if (session && req.nextUrl.pathname.includes("auth")) {
    console.log("redirecting to menu...");
    return NextResponse.redirect(new URL("/menu/desserts", req.url));
  }

  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return res;
}