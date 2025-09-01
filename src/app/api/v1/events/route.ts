import { NextResponse } from "next/server"

import { EventDetail, successResponse } from "@/app/api/_utils"

// Force dynamic rendering to prevent build-time API calls
export const dynamic = "force-dynamic"

async function fetchEvents(): Promise<EventDetail[]> {
	try {
		const url = "https://dev-api.revelsmit.in/api/v1/events"

		const headers = {
			accesskey: "27304c0b-5699-42a9-b6d4-db668d2b61882",
			accesstoken:
				"EMlrl6jEc20xg0qwkn5NCPGdmFw3345c5M9Wc4ovn4WxMxgDVmkFNJzQ8lpkt0IHTFpxNrRutXzXjlGnP9kdd9n1E8CMFi8UUuLODmkI",
			"Content-Type": "application/json",
		}

		const data = (await fetch(url, {
			headers: headers,
		}).then((r) => r.json())) as { data: EventDetail[] }

		return (
			data?.data
				?.filter((record) => record.card_name !== "SPORTS AND WORKSHOPS")
				.map((record) => ({
					event_name: record.event_name,
					event_desc: record.event_desc,
					event_date: record.event_date,
					event_time: record.event_time,
					category_name: record.category_name,
					card_name: record.card_name,
				})) ?? []
		)
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
