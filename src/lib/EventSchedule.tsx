"use client"

import { ChevronDown, Clock, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

import { EventsByDate } from "./EventData"

const dates = Object.keys(EventsByDate)
const categories = [
	"Footloose",
	"Crescendo",
	"Iridescent",
	"Haute Couture",
	"Xventure",
	"Anubhuti",
	"Lensation",
	"Ergo",
	"Animania",
	"Kalakriti",
	"Dramebaaz",
	"Gaming and Workshops",
	"OPS & HRD",
] as const

const EventSchedule: FC = () => {
	const [selectedDate, setSelectedDate] = useState<string>(dates[0] ?? "")
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

	const handleDateClick = (date: string): void => {
		setSelectedDate(date)
	}

	const handleCategoryToggle = (category: string): void => {
		setSelectedCategories((prev) =>
			prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
		)
	}

	const router = useRouter()

	const eventsForDate = EventsByDate[selectedDate] ?? []
	const filteredEvents = eventsForDate.filter(
		(event) => selectedCategories.length === 0 || selectedCategories.includes(event.category)
	)

	return (
		<>
			<div className="mb-8 mt-10 flex w-full justify-center">
				<hr className="mt-4 h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
				<button
					onClick={() => router.push("/")}
					className="mx-6 flex w-full max-w-96 items-center justify-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-white transition-colors hover:bg-blue-700">
					<span>Back to Home</span>
				</button>
				<hr className="mt-4 h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
			</div>
			<div className="flex h-screen flex-col bg-background p-4 font-sans">
				<div className="mx-auto w-full max-w-7xl">
					<h2 className="mb-4 text-2xl font-bold text-blue-900">Event Schedule</h2>

					{/* Date Selection */}
					<nav className="mb-4" aria-label="Date selection">
						<ScrollArea className="w-full">
							<div className="flex flex-wrap gap-2 rounded-lg bg-muted p-1">
								{dates.map((date) => (
									<Button
										key={date}
										onClick={() => handleDateClick(date)}
										variant={date === selectedDate ? "default" : "secondary"}
										className={`px-5 py-3 ${date === selectedDate ? "bg-blue-900 text-white" : ""}`}
										aria-selected={date === selectedDate}>
										{date}
									</Button>
								))}
							</div>
						</ScrollArea>
					</nav>

					{/* Filter by Category */}
					<div className="relative mb-4">
						<Button
							type="button"
							variant="outline"
							className="flex w-full items-center justify-between border-blue-900 text-blue-900"
							onClick={() => setIsFilterOpen((prev) => !prev)}
							aria-expanded={isFilterOpen}
							aria-controls="category-filter">
							<span>Filter by Category</span>
							<ChevronDown className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
						</Button>

						{isFilterOpen && (
							<Card
								className="absolute top-full z-10 w-full shadow-md shadow-blue-900/50"
								id="category-filter">
								<ScrollArea className="h-60">
									{categories.map((category) => (
										<div key={category} className="flex items-center space-x-2 px-4 py-2">
											<Checkbox
												id={category}
												checked={selectedCategories.includes(category)}
												onCheckedChange={() => handleCategoryToggle(category)}
											/>
											<label htmlFor={category} className="cursor-pointer text-sm">
												{category}
											</label>
										</div>
									))}
								</ScrollArea>
								<div className="border-t border-muted p-4">
									<Button
										className="w-full bg-blue-900 text-white"
										onClick={() => setIsFilterOpen(false)}>
										Apply Filters
									</Button>
								</div>
							</Card>
						)}
					</div>

					{/* Event Cards */}
					<ScrollArea className="h-[calc(100vh-16rem)]">
						<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
							{filteredEvents.map((event, index) => (
								<Card key={`${event.event}-${index}`} className="shadow-lg shadow-blue-900/50">
									<CardHeader>
										<CardTitle className="text-lg text-blue-900">{event.event}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="mb-2 text-sm text-muted-foreground">{event.category}</p>
										<p className="mb-2 text-sm">Round: {event.round}</p>
										<div className="flex items-center text-sm text-muted-foreground">
											<MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
											<span>{event.venue}</span>
										</div>
										<div className="mt-1 flex items-center text-sm text-muted-foreground">
											<Clock className="mr-2 h-4 w-4" aria-hidden="true" />
											<span>
												{event.startTime} - {event.endTime}
											</span>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</>
	)
}

export default EventSchedule
