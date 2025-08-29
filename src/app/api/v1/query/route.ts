import sqlite3 from "better-sqlite3"
import { NextResponse } from "next/server"
import { z } from "zod"

import { errorResponse, QUERIES_DB_FILENAME, successResponse } from "@/app/api/_utils"

// Force dynamic rendering to prevent build-time issues
export const dynamic = "force-dynamic"

interface CreateProps {
	name: string
	email: string
	query: string
}

const CreateQuerySchema = z.object({
	name: z.string().min(1, "name is required").max(200, "Given name is too long"),
	email: z.string().email("Invalid email format").max(500, "Given email is too long"),
	query: z.string().min(1, "query is required").max(3000, "Query is too long"),
})

export async function POST(request: Request): Promise<NextResponse> {
	if (!request.body) {
		return errorResponse("Invalid data", "Request body is empty", 400)
	}

	const body = (await request.json()) as unknown as CreateProps

	const zodResult = CreateQuerySchema.safeParse(body)
	if (!zodResult.success) {
		return errorResponse(zodResult.error.errors[0].message, "", 400)
	}

	const { name, email, query } = body

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

	try {
		const stmt = db.prepare(`
		  INSERT INTO queries (name, email, query)
		  VALUES (?, ?, ?)
		`)
		stmt.run(name, email, query)

		return successResponse({
			message: "Your query has been received. We will be contacting you shortly.",
		})
	} catch (error) {
		console.error("Error saving query to database:", error)
		return errorResponse("Failed to submit query; please try again after a while", "", 500)
	}
}
