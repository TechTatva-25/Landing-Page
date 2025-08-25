"use client"

import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

import { formatDate } from "@/lib/_utils"

interface Log {
	id: number
	ip: string
	isp: string
	location: string
	userAgent: string
	createdAt: string
}

interface PaginatedResponse {
	logs: Log[]
	pagination: { currentPage: number; totalPages: number; totalRecords: number }
}

interface Filter {
	id?: string
	ip?: string
	isp?: string
	location?: string
	userAgent?: string
}

const AdminLogsPage: React.FC = () => {
	const [logs, setLogs] = useState<Log[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [totalPages, setTotalPages] = useState<number>(1)
	const [filters, setFilters] = useState<Filter>({})
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

			const queryParams = new URLSearchParams({
				token,
				page: page.toString(),
				perPage: "30",
				...filters,
			}).toString()
			const response = await fetch(`/api/v1/adminLogs?${queryParams.toString()}`)
			if (response.status === 403) {
				router.push("/")
				return
			} else if (response.status === 200) {
				const data: PaginatedResponse = ((await response.json()) as { data: PaginatedResponse })?.data

				setLogs(data.logs)
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
					placeholder="Filter by IP Address"
					value={filters.ip}
					onChange={(e) => handleFilterChange(e, "ip")}
					className="rounded border px-4 py-2"
				/>
				<input
					type="text"
					placeholder="Filter by ISP"
					value={filters.isp}
					onChange={(e) => handleFilterChange(e, "isp")}
					className="rounded border px-4 py-2"
				/>
				<input
					type="text"
					placeholder="Filter by Location"
					value={filters.location}
					onChange={(e) => handleFilterChange(e, "location")}
					className="rounded border px-4 py-2"
				/>
				<input
					type="text"
					placeholder="Filter by User Agent"
					value={filters.userAgent}
					onChange={(e) => handleFilterChange(e, "userAgent")}
					className="rounded border px-4 py-2"
				/>
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
									<th className="border-b px-4 py-2">IP Address</th>
									<th className="border-b px-4 py-2">ISP</th>
									<th className="border-b px-4 py-2">Location</th>
									<th className="border-b px-4 py-2">User Agent</th>
									<th className="border-b px-4 py-2">Created</th>
								</tr>
							</thead>
							<tbody>
								{logs.map((log) => (
									<tr key={log.id}>
										<td className="border-b px-4 py-2">{log.id}</td>
										<td className="border-b px-4 py-2">{log.ip}</td>
										<td className="border-b px-4 py-2">{log.isp}</td>
										<td className="border-b px-4 py-2">{log.location}</td>
										<td className="border-b px-4 py-2">{log.userAgent}</td>
										<td className="border-b px-4 py-2">{formatDate(log.createdAt)}</td>
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

export default AdminLogsPage
