import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "./src/utils/supabase/middleware";

/**
 * Middleware function that checks if the user is authenticated and redirects them accordingly.
 * @param req - The Next.js request object.
 * @returns A Next.js response object or a redirect to the appropriate page.
 */
export async function middleware(req: NextRequest) {
	const { supabase, response } = createClient(req);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// if user is signed in and the current path is / redirect the user to /account
	if (user && req.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	// if user is not signed in and the current path is not /login redirect the user to /login
	if (!user && req.nextUrl.pathname !== "/login") {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
