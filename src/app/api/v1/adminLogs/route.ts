import sqlite3 from "better-sqlite3"
import { NextResponse } from "next/server"
import { z } from "zod"

import { errorResponse, QUERIES_DB_FILENAME, successResponse } from "@/app/api/_utils"

export const dynamic = "force-dynamic"

const db = sqlite3(QUERIES_DB_FILENAME)
db.prepare(
	`CREATE TABLE IF NOT EXISTS logs (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  ip TEXT NOT NULL,
	  isp TEXT NOT NULL,
	  location TEXT NOT NULL,
	  userAgent TEXT NOT NULL,
	  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
	)`
).run()

const QueryFilterSchema = z.object({
	id: z.string().max(10).optional(),
	ip: z.string().max(500).optional(),
	isp: z.string().max(500).optional(),
	location: z.string().max(500).optional(),
	userAgent: z.string().max(500).optional(),
	page: z.coerce.number().min(1).default(1),
	perPage: z.coerce.number().min(1).default(10),
})

export function GET(request: Request): NextResponse {
	try {
		const { searchParams } = new URL(request.url)

		const zodResult = QueryFilterSchema.safeParse(Object.fromEntries(searchParams.entries()))
		if (!zodResult.success) {
			return errorResponse(zodResult.error.errors[0].message, "", 400)
		}

		const { id, ip, isp, location, userAgent, page, perPage } = zodResult.data

		let whereClause = "1=1"
		const params: string[] = []

		if (id) {
			whereClause += " AND id = ?"
			params.push(id.toString())
		}

		if (ip) {
			whereClause += " AND ip LIKE ?"
			params.push(`%${ip}%`)
		}

		if (isp) {
			whereClause += " AND isp LIKE ?"
			params.push(`%${isp}%`)
		}

		if (location) {
			whereClause += " AND location LIKE ?"
			params.push(`%${location}%`)
		}

		if (userAgent) {
			whereClause += " AND userAgent LIKE ?"
			params.push(`%${userAgent}%`)
		}

		const offset = (page - 1) * perPage
		const countResult = db.prepare(`SELECT COUNT(*) as total FROM logs WHERE ${whereClause}`).all(...params)
		const totalRecords = (countResult as { total: number }[])[0].total

		const logs = db
			.prepare(
				`SELECT * FROM logs WHERE ${whereClause}
		  ORDER BY createdAt DESC
		  LIMIT ? OFFSET ?`
			)
			.all(...params, perPage, offset)

		const totalPages = Math.ceil(totalRecords / perPage)

		return successResponse({
			logs,
			pagination: {
				currentPage: page,
				perPage: perPage,
				totalRecords: totalRecords,
				totalPages: totalPages,
			},
		})
	} catch (error) {
		console.error("Error fetching paginated logs:", error)
		return errorResponse("Failed to fetch logs", "", 500)
	}
}
