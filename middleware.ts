import { NextResponse, type NextRequest } from "next/server";
import { createMiddleWareServerClient } from "./app/_lib/supabase/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const pathname = request.nextUrl.pathname;
  const supabase = createMiddleWareServerClient(request, response);

  // helper function to redirect users
  const cloneUrlAndRedirect = (pathname: string) => {
    const url = request.nextUrl.clone();
    url.pathname = pathname;
    return Response.redirect(url);
  };

  const { data, error } = await supabase.auth.getUser();
  
  console.log(error);

  if (pathname.includes("profile") && !data?.user)
    return cloneUrlAndRedirect("auth/login");

  if (pathname === "/auth" && !data?.user) return cloneUrlAndRedirect("auth/login");

  if (pathname.includes("auth") && data?.user)
    return cloneUrlAndRedirect("menu/all");

  if (pathname === "/menu") return cloneUrlAndRedirect("menu/all");

  return response;
}
