import ipInfo from "ipinfo"
import { NextResponse } from "next/server"

// export const QUERIES_AUTH_TOKEN = process.env.QUERIES_AUTH_TOKEN
export const QUERIES_DB_FILENAME = process.env.SQLITE_DB_PATH ?? "landing_page_queries.db"

export interface EventDetail {
	event_name: string
	event_desc: string
	event_date: string
	event_time: string
	category_name: string
	card_name: string
}

export interface RawEventDetail {
	event_name: string
	event_desc: string
	event_date: string
	event_time: string
	category_name: string
	event_type: string
	event_title: string
	team_size_min: number
	team_size_max: number
	venue_name: string
	venue_latitude: string
	venue_longitude: string
	event_amount: number | null
	event_status: string
	event_year: string
	card_name: string
	team_type: string
}

export interface ApiResponse<T> {
	ok: boolean
	message: string
	data?: T
	error?: string
}

interface IpInfoExtracted {
	ip: string
	location: string
	isp: string
}

export function successResponse<T>(
	data: T,
	options?: {
		headers?: Record<string, string>
		status?: number
	}
): NextResponse<ApiResponse<T>> {
	const response = NextResponse.json(
		{
			ok: true,
			data,
		} as ApiResponse<T>,
		{ status: options?.status || 200 }
	)

	if (options?.headers) {
		Object.entries(options.headers).forEach(([key, value]) => {
			response.headers.set(key, value)
		})
	}

	return response
}

export function errorResponse(message: string, details: string, status: number): NextResponse {
	if (details) {
		console.error(details)
	}

	return NextResponse.json(
		{
			ok: false,
			message,
		} as ApiResponse<never>,
		{ status }
	)
}

export function getIstTimestamp(): string {
	const dateString = new Date(new Date().getTime() + 330 * 60000).toISOString()

	return `${dateString.split("T")[0]}_${dateString.split("T")[1].split(".")[0].split(":").join("-")}`
}

export async function getIpData(request: Request): Promise<IpInfoExtracted> {
	const forwarded = request.headers.get("x-forwarded-for")
	const ip = forwarded?.split(/, /)[0] ?? ""

	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/await-thenable
		const ipData = await ipInfo(ip)

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (ipData.bogon) {
			return { ip, isp: "N/A", location: "N/A" }
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		const isp = ipData.org ?? ""
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		const location = `${ipData.city ?? ""}${ipData.city ? ", " : ""}${ipData.region ?? ""}${ipData.region ? ", " : ""}${ipData.country ?? ""}`

		return { ip, isp, location }
	} catch (error) {
		console.error(getIstTimestamp(), "ipInfo failed:", error)
		return { ip, isp: "N/A", location: "N/A" }
	}
}
