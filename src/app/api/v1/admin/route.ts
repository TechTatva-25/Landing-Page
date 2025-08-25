import sqlite3 from "better-sqlite3"
import { NextResponse } from "next/server"
import { z } from "zod"

import { errorResponse, getIpData, QUERIES_DB_FILENAME, successResponse } from "@/app/api/_utils"

export const dynamic = "force-dynamic"

const db = sqlite3(QUERIES_DB_FILENAME)
db.prepare(
	`CREATE TABLE IF NOT EXISTS queries (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT NOT NULL,
	  email TEXT NOT NULL,
	  query TEXT NOT NULL,
	  resolved BOOLEAN NOT NULL DEFAULT false,
	  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
	)`
).run()

db.prepare(
	`CREATE TRIGGER IF NOT EXISTS update_queries_updatedAt
	AFTER UPDATE ON queries
	FOR EACH ROW
	BEGIN
	  UPDATE queries
	  SET updatedAt = CURRENT_TIMESTAMP
	  WHERE id = OLD.id;
	END;`
).run()

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
	name: z.string().max(500).optional(),
	email: z.string().max(500).optional(),
	query: z.string().max(1000).optional(),
	resolved: z.boolean().optional(),
	page: z.coerce.number().min(1).default(1),
	perPage: z.coerce.number().min(1).default(10),
})

interface UpdateProps {
	id: number
	resolved: boolean
}

const UpdateQuerySchema = z.object({
	id: z.number().min(1),
	resolved: z.boolean(),
})

export async function GET(request: Request): Promise<NextResponse> {
	try {
		// request logging
		const { ip, isp, location } = await getIpData(request)
		const clientUA = request.headers.get("user-agent") ?? ""
		const stmt = db.prepare(`
			INSERT INTO logs (ip, isp, location, userAgent)
			VALUES (?, ?, ?, ?)
		  `)
		stmt.run(ip, isp, location, clientUA)

		const url = new URL(request.url)
		const urlSearchParams = url.searchParams

		const body = {
			id: urlSearchParams.get("id") ?? "",
			name: urlSearchParams.get("name"),
			email: urlSearchParams.get("email"),
			query: urlSearchParams.get("query"),
			resolved:
				urlSearchParams.get("resolved")?.toLowerCase() === "true"
					? true
					: urlSearchParams.get("resolved")?.toLowerCase() === "false"
						? false
						: undefined,
			page: urlSearchParams.get("page"),
			perPage: urlSearchParams.get("perPage"),
		}

		const parsedParams = QueryFilterSchema.safeParse(body)
		if (!parsedParams.success) {
			return errorResponse(parsedParams.error.errors[0].message, "", 400)
		}

		const { id, name, email, query, resolved, page, perPage } = parsedParams.data

		let whereClause = "1=1"
		const params: string[] = []

		if (id) {
			whereClause += " AND id = ?"
			params.push(id.toString())
		}

		if (name) {
			whereClause += " AND name LIKE ?"
			params.push(`%${name}%`)
		}

		if (email) {
			whereClause += " AND email LIKE ?"
			params.push(`%${email}%`)
		}

		if (query) {
			whereClause += " AND query LIKE ?"
			params.push(`%${query}%`)
		}

		if (resolved !== undefined) {
			whereClause += " AND resolved = ?"
			params.push(resolved ? "1" : "0")
		}

		const offset = (page - 1) * perPage
		const countResult = db.prepare(`SELECT COUNT(*) as total FROM queries WHERE ${whereClause}`).all(...params)
		const totalRecords = (countResult as { total: number }[])[0].total

		const queries = db
			.prepare(
				`SELECT * FROM queries WHERE ${whereClause}
		  ORDER BY createdAt DESC
		  LIMIT ? OFFSET ?`
			)
			.all(...params, perPage, offset)

		const totalPages = Math.ceil(totalRecords / perPage)

		return successResponse({
			queries,
			pagination: {
				currentPage: page,
				perPage: perPage,
				totalRecords: totalRecords,
				totalPages: totalPages,
			},
		})
	} catch (error) {
		console.error("Error fetching paginated queries:", error)
		return errorResponse("Failed to fetch queries", "", 500)
	}
}

export async function PUT(request: Request): Promise<NextResponse> {
	if (!request.body) {
		return errorResponse("Invalid data", "Request body is empty", 400)
	}

	const body = (await request.json()) as unknown as UpdateProps

	const zodResult = UpdateQuerySchema.safeParse(body)
	if (!zodResult.success) {
		return errorResponse(zodResult.error.errors[0].message, "", 400)
	}

	const { id, resolved } = body

	try {
		const stmt = db.prepare(`
		  UPDATE queries SET resolved=? WHERE id=?
		`)
		if (!stmt.run(resolved ? 1 : 0, id).changes) {
			return errorResponse("Query not found", "", 404)
		}

		return successResponse({
			message: "Query status updated",
		})
	} catch (error) {
		console.error("Error updating query in database:", error)
		return errorResponse("Failed to update query; please try again later", "", 500)
	}
}
