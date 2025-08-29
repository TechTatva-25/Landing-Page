"use client"

import { motion } from "framer-motion"
import Image, { type StaticImageData } from "next/image"
import { type FC } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import footerStyles from "@/styles/footer.module.css"
import styles from "@/styles/passes.module.css"

import FloatingHeader from "./FloatingHeader"
import { useInView } from "./useInView"

// Removed background image import
import igIcon from "../images/insta.png"
import dhvani from "../images/lineup/dhvani.jpg"
import gurleen from "../images/lineup/gurleen.jpg"
import mithoon from "../images/lineup/mithoon.png"
import raftaar from "../images/lineup/raftaar.png"
import shreyja from "../images/lineup/shreyja.png"

interface ArtistCard {
	id: number
	path: StaticImageData | string
	title: string
	InstagramLink: string
}

const LineUp: FC = () => {
	const { ref, isInView } = useInView()

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
		},
	}

	const cards: ArtistCard[] = [
		{
			id: 1,
			path: shreyja,
			title: "Shreyja Mhatre",
			InstagramLink: "https://www.instagram.com/shreyja.mhatre_official/",
		},
		{
			id: 2,
			path: gurleen,
			title: "Gurleen Pannu",
			InstagramLink: "https://www.instagram.com/gurleen_pannu/",
		},
		{
			id: 3,
			path: dhvani,
			title: "Dhvani Bhanushali",
			InstagramLink: "https://www.instagram.com/dhvanibhanushali22/",
		},
		{
			id: 4,
			path: mithoon,
			title: "Mithoon",
			InstagramLink: "https://www.instagram.com/mithoon11/",
		},
		{
			id: 5,
			path: raftaar,
			title: "Raftaar",
			InstagramLink: "https://www.instagram.com/raftaarmusic/",
		},
	]

	return (
		<div className="relative min-h-screen w-full" ref={ref}>
			<div className="relative z-10">
				<FloatingHeader />

				{/* Hero Section */}
				<div className="relative pt-20 pb-16 overflow-hidden">
					{/* Elegant background pattern */}
					<div className="absolute inset-0 opacity-5">
						<div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/10 to-transparent"></div>
					</div>

					{/* Content */}
					<div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
						<motion.div
							initial={{ opacity: 0, y: -30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
							className="mb-8"
						>
							<h1 className={`${styles.passesHeading} heading-font mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide ${isInView ? 'in-view' : ''}`}>
								Conclave
							</h1>
							<p className="body-font mx-auto max-w-3xl text-lg sm:text-xl leading-relaxed text-black">
								Experience the grandest celebration of music and entertainment at TechTatva 25.
								Witness extraordinary performances from India's most talented artists in an
								atmosphere of pure magic and wonder.
							</p>
						</motion.div>
					</div>
				</div>

				{/* Artists Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					transition={{
						duration: 0.6,
						ease: [0.25, 0.46, 0.45, 0.94],
					}}
					className="mx-auto max-w-7xl px-4"
				>
					<div className="mb-12 text-center">
						<motion.h2
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							transition={{
								duration: 0.6,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}
							className={`${styles.passesHeading} heading-font text-3xl sm:text-4xl font-bold ${isInView ? 'in-view' : ''}`}
						>
							Featured Artists
						</motion.h2>
						<p className="body-font mt-4 text-base sm:text-lg text-black">
							Prepare to be mesmerized by these incredible talents
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
						{cards.map((card, index) => (
							<motion.div
								key={card.id}
								variants={itemVariants}
								initial="hidden"
								animate="visible"
								whileHover={{ y: -8, scale: 1.02 }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
									ease: [0.25, 0.46, 0.45, 0.94]
								}}
							>
								<Card className={`${styles.royalPassCard} group overflow-hidden border-none`}>
									<CardHeader className="pb-4">
										<CardTitle className={`heading-font text-xl sm:text-2xl font-bold ${styles.passesCardTitle}`}>
											{card.title}
										</CardTitle>
									</CardHeader>

									<CardContent className="pb-4">
										<div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
											<Image
												src={card.path}
												alt={`${card.title} - Artist`}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												className="object-cover transition-transform duration-500 group-hover:scale-110"
												priority={card.id <= 2}
											/>
											{/* Golden overlay on hover */}
											<div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
										</div>
									</CardContent>

									<CardFooter className="pt-0 w-full">
										<a
											href={card.InstagramLink}
											target="_blank"
											rel="noopener noreferrer"
											className="w-full"
											aria-label={`Visit ${card.title}'s Instagram profile`}
										>
											<Button className={`${footerStyles.teamButton} w-full flex items-center justify-center gap-2 !text-[0.8rem] sm:!text-sm`}>
												<Image
													src={igIcon}
													alt="Instagram"
													width={20}
													height={20}
													className="h-4 w-4 sm:h-5 sm:w-5"
													aria-hidden="true"
												/>
												<span className="ml-2">Follow on Instagram</span>
											</Button>
										</a>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Enhanced spacing at bottom */}
				<div className="h-20"></div>
			</div>{/* end z-10 wrapper */}
		</div>
	)
}

export default LineUp
