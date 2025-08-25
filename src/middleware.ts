import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// import { QUERIES_AUTH_TOKEN } from "@/app/api/_utils"

export function middleware(request: NextRequest): NextResponse<unknown> {
	const token = request.nextUrl.searchParams.get("token")

	if (!token || token !== process.env.QUERIES_AUTH_TOKEN) {
		return NextResponse.json({ message: "Forbidden", ok: false }, { status: 403 })
	}

	return NextResponse.next()
}

export const config = {
	matcher: ["/api/v1/admin:path*"],
}
