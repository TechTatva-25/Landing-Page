"use client"

import styles from "@/styles/passes.module.css"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

interface EventCardProps {
	imageUrl?: string
	date?: string
	day?: string
	eventName?: string
	description?: string
	clubName?: string
	link?: string
	index?: number
}

const EventCard = ({
	imageUrl = "",
	date = "MAR",
	day = "15",
	eventName = "Event Name",
	description = "",
	clubName = "PnP",
	link = "",
	index = 0,
}: EventCardProps): React.JSX.Element => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 0.4,
				delay: index * 0.05,
				ease: "easeOut",
			}}
			viewport={{ once: true, amount: 0.1 }}
			whileHover={{
				y: -6,
				transition: { duration: 0.3 },
			}}
			onClick={() => {
				if (link) {
					window.open(link)
				}
			}}
			className={`${styles.royalPassCard} group cursor-pointer`}>
			{/* Image Section */}
			<div className="relative h-48 overflow-hidden">
				<Image
					src={imageUrl || "/api/placeholder/320/192"}
					alt="Event"
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					loading="eager"
					quality={75}
					placeholder="blur"
					blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
			</div>

			{/* Content Section */}
			<div className="p-6 flex flex-col h-full">
				<div className="flex items-start space-x-4 mb-4">
					{/* Date */}
					<div className="text-left flex-shrink-0">
						<p className="royal-gold heading-font text-lg font-semibold">{date}</p>
						<p className="heading-font text-2xl font-bold text-white">{day}</p>
					</div>

					{/* Event Info */}
					<div className="flex-1 min-w-0">
						<h3 className={`heading-font mb-3 text-2xl ${styles.passesCardTitle}`}>
							{eventName}
						</h3>
						<p className="royal-gold body-font text-sm font-semibold">{clubName}</p>
					</div>
				</div>

				{description && (
					<>
						<div className={`${styles.passesCardDivider} mb-4`}></div>
						<p className={`body-font mb-4 text-sm leading-relaxed ${styles.passesCardText} line-clamp-4 flex-grow`}>
							{description.length > 180 ? `${description.substring(0, 180)}...` : description}
						</p>
					</>
				)}

				<div className={`${styles.passesLearnMore} mt-auto`}>
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
