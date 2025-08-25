"use client"

import Image, { StaticImageData } from "next/image"

interface PassCardProps {
	imageUrl?: StaticImageData | string
	passType?: string
	description?: string
	link?: string
}

const EventCard = ({
	imageUrl,
	passType = "Flagship Pass",
	description = "",
	link = "",
}: PassCardProps): React.JSX.Element => {
	return (
		<div
			onClick={() => {
				if (link) {
					window.open(link)
				}
			}}
			className="m-4 inline-block w-80 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-300 hover:scale-105">
			{/* Image Section */}
			<div className="relative h-48">
				<Image src={imageUrl || "/api/placeholder/320/192"} alt="Event" fill className="object-cover" />
			</div>

			{/* Content Section */}
			<div className="p-6">
				<div className="flex items-start">
					{/* Pass Info */}
					<div>
						<h3 className="text-xl font-bold text-gray-900">{passType}</h3>
						<p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventCard
