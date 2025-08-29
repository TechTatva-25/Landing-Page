import { NextResponse } from "next/server"

import { RawEventDetail, successResponse } from "@/app/api/_utils"

// Force dynamic rendering to prevent build-time API calls
export const dynamic = "force-dynamic"

async function fetchEvents(): Promise<RawEventDetail[]> {
	try {
		const url = "https://api.revelsmit.in/api/v1/events"

		const headers = {
			accesskey: "27304c0b-5699-42a9-b6d4-db668d2b61882",
			accesstoken:
				"EMlrl6jEc20xg0qwkn5NCPGdmFw3345c5M9Wc4ovn4WxMxgDVmkFNJzQ8lpkt0IHTFpxNrRutXzXjlGnP9kdd9n1E8CMFi8UUuLODmkI",
			"Content-Type": "application/json",
		}

		const data = (await fetch(url, {
			headers: headers,
		}).then((r) => r.json())) as { data: RawEventDetail[] }

		return data.data
	} catch (error) {
		console.error("Error:", error)
		return []
	}
}

export async function GET(): Promise<NextResponse> {
	try {
		const events = await fetchEvents()

		return successResponse(events)
	} catch (e) {
		console.error(e)
		return successResponse([])
	}
}
