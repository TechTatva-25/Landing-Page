"use client"

import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

interface PassCardProps {
	imageUrl?: StaticImageData | string
	passType?: string
	description?: string
	link?: string
	index?: number
}

const EventCard = ({
	imageUrl,
	passType = "Flagship Pass",
	description = "",
	link = "",
	index = 0,
}: PassCardProps): React.JSX.Element => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 40,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: "easeOut",
			}}
			viewport={{ once: true, amount: 0.3 }}
			whileHover={{
				y: -8,
				transition: { duration: 0.3 },
			}}
			onClick={() => {
				if (link) {
					window.open(link)
				}
			}}
			className="elegant-pass-card group cursor-pointer">
			{/* Image Section */}
			<div className="relative h-48 overflow-hidden">
				<Image
					src={imageUrl || "/api/placeholder/320/192"}
					alt="Event"
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
			</div>

			{/* Content Section */}
			<div className="p-6">
				<h3 className="heading-font royal-gradient-heading mb-3 text-2xl font-normal">{passType}</h3>

				<div className="bg-royal-gold mb-4 h-0.5 w-12"></div>

				<p className="body-font mb-4 text-sm leading-relaxed text-gray-300">{description}</p>

				<div className="text-royal-gold flex items-center text-sm font-medium transition-colors duration-300 group-hover:text-yellow-400">
					<span>Learn More</span>
					<svg
						className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</div>
			</div>
		</motion.div>
	)
}

export default EventCard
