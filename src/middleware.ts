import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const pathname = req.nextUrl.pathname;

  // Define role-based access rules dynamically
  const roleRoutes: Record<string, string[]> = {
    Admin: ["/dashboard", "/users", "/invoices"],
    User: ["/dashboard", "/users", "/invoices"],
    Manager: ["/dashboard", "/reports"], // Example Manager route
  };

  const userRole = token.role as string;

  if (!roleRoutes[userRole]?.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/users/:path*", "/invoices/:path*", "/reports/:path*"],
};

// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/signin",
//   },
// });

// export const config = { matcher: ["/dashboard/:path*"] };

