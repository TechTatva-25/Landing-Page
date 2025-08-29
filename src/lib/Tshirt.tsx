"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "next/image"
import React from "react"

import back from "../images/tshirts/back.png"
import front from "../images/tshirts/front.png"
import { useInView } from "./useInView"
import styles from "@/styles/passes.module.css"
import merchandiseStyles from "@/styles/merchandise.module.css"

const Tshirt = (): React.JSX.Element => {
	const openPage = (url: string): void => {
		window.open(url)
	}

	const { ref, isInView } = useInView()
	
	return (
		<section className="px-4 py-16" id="tshirt" ref={ref}>
			<div className="my-8 flex w-full items-center justify-center">
				<span className={`${styles.passesHeading} heading-font ${isInView ? 'in-view' : ''}`}>Merchandise</span>
			</div>

			{/* Image Container */}
			<div className="mx-auto flex flex-wrap justify-center gap-10">
				{/* Front Image - Hidden on Mobile */}
				<div className={`hidden justify-center md:flex ${merchandiseStyles.merchandiseCard}`}>
					<Image
						src={front}
						alt="T-Shirt Front"
						width={300}
						height={375}
						className="transition-transform duration-300"
						priority
						onClick={() =>
							openPage("https://register.revelsmit.in/merchandise-details?id=6411715fe7288a356b3aa0c9")
						}
					/>
				</div>

				{/* Back Image - Always Visible */}
				<div className={`flex justify-center ${merchandiseStyles.merchandiseCard}`}>
					<Image
						src={back}
						alt="T-Shirt Back"
						width={300}
						height={375}
						className="transition-transform duration-300"
						priority
						onClick={() =>
							openPage("https://register.revelsmit.in/merchandise-details?id=6411715fe7288a356b3aa0c9")
						}
					/>
				</div>
			</div>
		</section>
	)
}

export default Tshirt
