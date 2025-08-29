"use client"
import Image from "next/image"
import React from "react"

interface EventCardProps {
	imageUrl?: string
	date?: string
	day?: string
	eventName?: string
	// description?: string
	clubName?: string
	link?: string
}

const EventCard = ({
	imageUrl = "",
	// date = "MAR",
	day = "15",
	eventName = "Event Name",
	// description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
	clubName = "PnP",
	link = "",
}: EventCardProps): React.JSX.Element => {
	return (
		<div
			onClick={() => {
				if (link) {
					window.open(link)
				}
			}}
			className="border-royal-gold from-dark-secondary-bg to-dark-bg mx-4 my-4 min-h-72 max-w-xs cursor-pointer overflow-hidden rounded-3xl border-2 bg-gradient-to-br shadow-lg transition-transform duration-300 hover:scale-105 lg:h-80 lg:w-80">
			{/* Image Section */}
			<div className="relative h-44">
				<Image className="h-full w-full object-cover" src={imageUrl} width={400} height={400} alt="Event" />
			</div>

			{/* Content Section */}
			<div className="p-6">
				<div className="flex items-start space-x-4">
					{/* Date */}
					<div className="text-left">
						<p className="royal-gold heading-font text-xl font-semibold">MAR</p>
						<p className="heading-font text-xl font-bold text-white">{day}</p>
					</div>

					{/* Event Info */}
					<div>
						<h3 className="text-md heading-font font-bold text-white">{eventName}</h3>
						{/* <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p> */}
						<p className="royal-gold body-font mt-2 text-sm font-semibold">{clubName}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventCard
