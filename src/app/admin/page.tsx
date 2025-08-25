"use client"

import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

import { formatDate } from "@/lib/_utils"

interface Query {
	id: number
	name: string
	email: string
	query: string
	resolved: boolean
	createdAt: string
	updatedAt: string
}

interface PaginatedResponse {
	queries: Query[]
	pagination: { currentPage: number; totalPages: number; totalRecords: number }
}

interface Filter {
	id?: number
	name?: string
	email?: string
	query?: string
	resolved?: boolean
}

const QueriesPage: React.FC = () => {
	const [queries, setQueries] = useState<Query[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)
	const [filters, setFilters] = useState<Filter>({ resolved: false })
	const router = useRouter()
	const [totalRecords, setTotalRecords] = useState<number>(0)

	const fetchQueries = async (page: number): Promise<void> => {
		setLoading(true)
		try {
			const token = document.location.search.slice(1).split("&")[0].split("=")[1]
			if (!token) {
				router.push("/")
				return
			}

			const response = await fetch(
				`/api/v1/admin?token=${token}&page=${page}&perPage=30&id=${filters.id ?? ""}&name=${filters.name ?? ""}&email=${filters.email ?? ""}&query=${filters.query ?? ""}&resolved=${filters.resolved ?? ""}`
			)
			if (response.status === 403) {
				router.push("/")
				return
			} else if (response.status === 200) {
				const data: PaginatedResponse = ((await response.json()) as { data: PaginatedResponse })?.data

				setQueries(data.queries)
				setTotalPages(data.pagination.totalPages)
				setTotalRecords(data.pagination.totalRecords)
				setCurrentPage(data.pagination.currentPage)
			}
		} catch (error) {
			console.error("Error fetching queries:", error)
			alert("Failed to fetch queries.")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		void fetchQueries(currentPage)
	}, [currentPage, filters])

	const handleNextPage = (): void => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevPage = (): void => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleUpdateStatus = async (id: number, resolved: boolean): Promise<void> => {
		if (!confirm(`Changing status to [ ${resolved ? "RESOLVED" : "NOT resolved"} ]\n\nAre you sure?`)) {
			return
		}

		try {
			const token = document.location.search.slice(1).split("&")[0].split("=")[1]
			if (!token) {
				router.push("/")
				return
			}

			const response = await fetch(`/api/v1/admin?token=${token}`, {
				method: "PUT",
				body: JSON.stringify({ id, resolved }),
			})

			if (response.status === 403) {
				router.push("/")
				return
			} else if (response.status === 200) {
				const data = (await response.json()) as { ok: boolean; message: string }

				if (data.ok) {
					// alert(data.message)
					setQueries(queries.map((query) => (query.id === id ? { ...query, resolved } : query)))
				} else {
					alert(data.message ?? "Error updating query status.")
				}
			}
		} catch (error) {
			console.error("Error updating query:", error)
			alert("An error occurred while updating the query.")
		}
	}

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, field: string): void => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
		}))
	}

	return (
		<div className="p-6">
			{/* <h1 className="mb-6 text-3xl font-bold">Queries [{totalRecords}]</h1> */}

			<div className="mb-4 flex items-end gap-4">
				<input
					type="text"
					placeholder="Filter by ID"
					value={filters.id}
					onChange={(e) => handleFilterChange(e, "id")}
					className="rounded border px-4 py-2"
				/>
				<input
					type="text"
					placeholder="Filter by Name"
					value={filters.name}
					onChange={(e) => handleFilterChange(e, "name")}
					className="rounded border px-4 py-2"
				/>
				<input
					type="text"
					placeholder="Filter by Email"
					value={filters.email}
					onChange={(e) => handleFilterChange(e, "email")}
					className="rounded border px-4 py-2"
				/>
				<input
					type="text"
					placeholder="Filter by Query"
					value={filters.query}
					onChange={(e) => handleFilterChange(e, "query")}
					className="rounded border px-4 py-2"
				/>
				<div>
					<label htmlFor="resolvedFilter">Resolved </label>
					<input
						id="resolvedFilter"
						type="checkbox"
						checked={filters.resolved ? true : false}
						onChange={(e) => handleFilterChange(e, "resolved")}
						className="rounded border px-4 py-2"
					/>
				</div>
				|&nbsp;&nbsp;&nbsp;Count: {totalRecords}
			</div>

			<div>
				{loading ? (
					<p className="text-center text-lg">Loading...</p>
				) : (
					<>
						<table className="min-w-full table-auto border-collapse">
							<thead>
								<tr className="bg-gray-100">
									<th className="border-b px-4 py-2">ID</th>
									<th className="border-b px-4 py-2">Name</th>
									<th className="border-b px-4 py-2">Email</th>
									<th className="border-b px-4 py-2">Query</th>
									<th className="border-b px-4 py-2">Created</th>
									<th className="border-b px-4 py-2">Updated</th>
									<th className="border-b px-4 py-2">Status</th>
									<th className="border-b px-4 py-2">Actions</th>
								</tr>
							</thead>
							<tbody>
								{queries.map((query) => (
									<tr key={query.id}>
										<td className="border-b px-4 py-2">{query.id}</td>
										<td className="border-b px-4 py-2">{query.name}</td>
										<td className="border-b px-4 py-2">
											<a
												className="hover:text-blue-700 hover:underline"
												href={`mailto:${query.email}`}>
												{query.email}
											</a>
										</td>
										<td className="border-b px-4 py-2">{query.query}</td>
										<td className="border-b px-4 py-2">{formatDate(query.createdAt)}</td>
										<td className="border-b px-4 py-2">{formatDate(query.updatedAt)}</td>
										<td className="border-b px-4 py-2">
											{query.resolved ? "RESOLVED" : "NOT resolved"}
										</td>
										<td className="border-b px-4 py-2">
											<button
												// eslint-disable-next-line @typescript-eslint/no-misused-promises
												onClick={() => handleUpdateStatus(query.id, !query.resolved)}
												className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
												Toggle Status
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{totalPages > 1 && (
							<div className="mt-6 flex items-center justify-center gap-4">
								<button
									onClick={handlePrevPage}
									disabled={currentPage === 1}
									className="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400">
									Previous
								</button>
								<span className="text-lg">
									Page {currentPage} of {totalPages}
								</span>
								<button
									onClick={handleNextPage}
									disabled={currentPage === totalPages}
									className="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400">
									Next
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default QueriesPage
