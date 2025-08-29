"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

import techtatva from "../../public/images_tt/Untitled design (1).png"
import mit from "@/images/mitlogo.png"

const About: React.FC = (): JSX.Element => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94]
			}
		}
	}

	const logoVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94]
			}
		}
	}

	return (
		<div className="relative bg-black text-white overflow-hidden">
			{/* Royal background with subtle overlay */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
			<div className="absolute inset-0 bg-gradient-radial-blur" />
			
			<div className="relative z-10 sm:px-32 py-20">
				{/* Hero Section */}
				<motion.section 
					className="container mx-auto" 
					id="about"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.div className="my-12 flex items-center" variants={itemVariants}>
						<div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-royal-gold/50 to-royal-gold" />
						<h2 className="royal-gradient-heading mx-8 text-5xl font-bold heading-font tracking-wide">About TechTatva 25</h2>
						<div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-royal-gold/50 to-royal-gold" />
					</motion.div>

					<div className="grid items-center gap-12 lg:grid-cols-2">
						<motion.div 
							className="relative mx-auto h-64 w-96 sm:w-[600px] sm:h-80"
							variants={logoVariants}
						>
							<Image 
								src={techtatva} 
								alt="TechTatva Logo" 
								fill 
								className="object-contain drop-shadow-2xl" 
								sizes="(max-width: 768px) 384px, 600px"
							/>
						</motion.div>

						<motion.div className="space-y-6" variants={itemVariants}>
							<div className="space-y-6">
								<p className="text-justify body-font text-gray-300 text-lg leading-relaxed">
									TechTatva is the annual technical festival of Manipal Institute of Technology, Manipal,
									celebrating innovation, creativity, and technological excellence. Conducted over a period of four days, 
									including prestigious competitions, hackathons, and technical workshops, the fest is a convergence of 
									brilliant minds and cutting-edge ideas.
								</p>
								<p className="text-justify body-font text-gray-300 text-lg leading-relaxed">
									From Robotics and AI to Cybersecurity, Web Development, 
									and Machine Learning, TechTatva showcases the best of technical talent. Every year, thousands of 
									students from colleges across the country, as well as international participants, come together to 
									make TechTatva one of the largest platforms for technical innovation and knowledge exchange.
								</p>
							</div>
						</motion.div>
					</div>
				</motion.section>

				{/* History Section */}
				<motion.section 
					className="container mx-auto px-4 py-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<motion.div className="mx-4 space-y-6" variants={itemVariants}>
							<h2 className="royal-gradient-heading text-4xl font-bold heading-font">Our Legacy</h2>

							<div className="space-y-4">
								<p className="text-justify body-font text-gray-300 text-lg leading-relaxed">
									TechTatva has been the cornerstone of technical innovation at Manipal Institute of Technology 
									since its inception. What started as a small gathering of tech enthusiasts has evolved into 
									one of the most prestigious technical festivals in the country.
								</p>
								<p className="text-justify body-font text-gray-300 text-lg leading-relaxed">
									Over the years, TechTatva has witnessed groundbreaking projects, revolutionary ideas, and the birth of countless 
									innovations that have shaped the future of technology. The festival continues to inspire 
									generations of engineers and technologists, fostering a culture of innovation and excellence 
									that defines MIT's commitment to technological advancement.
								</p>
							</div>
						</motion.div>

						<motion.div 
							className="flex w-full justify-center" 
							variants={itemVariants}
						>
							<div className="relative h-48 w-48 sm:h-64 sm:w-64">
								<Image 
									src={mit} 
									alt="MIT Logo" 
									fill 
									className="object-cover rounded-full drop-shadow-2xl" 
								/>
							</div>
						</motion.div>
					</div>
				</motion.section>
			</div>
		</div>
	)
}

export default About
