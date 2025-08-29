"use client"

import styles from "@/styles/passes.module.css"
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
	// Detect if this is the proshow card
	const isProshow = passType?.toLowerCase().includes('proshow')

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
				y: isProshow ? -8 : -6,
				transition: { duration: 0.3 },
			}}
			onClick={() => {
				if (link) {
					window.open(link)
				}
			}}
			className={`${isProshow ? styles.proshowCard : styles.royalPassCard} group cursor-pointer`}>
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
				<h3 className={`heading-font mb-3 text-2xl ${
					isProshow ? styles.proshowCardTitle : styles.passesCardTitle
				}`}>
					{passType}
				</h3>

				<div className={`${
					isProshow ? styles.proshowCardDivider : styles.passesCardDivider
				} mb-4`}></div>

				<p className={`body-font mb-4 text-sm leading-relaxed ${styles.passesCardText}`}>
					{description}
				</p>

				<div className={isProshow ? styles.proshowLearnMore : styles.passesLearnMore}>
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
