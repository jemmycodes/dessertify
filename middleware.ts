import toast from "react-hot-toast";
import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const data = await supabase.auth.getSession();

if (!data) {
  console.log("nodata")
}

  if (data && req.nextUrl.pathname.includes("/auth")) {
    console.log("hi")
    return NextResponse.redirect(new URL("/menu/desserts", req.url));
  }

  if (
    !data &&
    (req.nextUrl.pathname.includes("cart") ||
      req.nextUrl.pathname.includes("profile"))
  ) {
    console.log("redirecting to login")
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return res;
}
