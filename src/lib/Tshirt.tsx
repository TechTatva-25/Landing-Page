"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "next/image"
import React from "react"

import back from "../images/tshirts/back.png"
import front from "../images/tshirts/front.png"

const Tshirt = (): React.JSX.Element => {
	const openPage = (url: string): void => {
		window.open(url)
	}

	return (
		<section className="px-4 py-16 dark-bg" id="tshirt">
			<div className="my-8 flex w-full items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-royal-gold" />
				<span className="mx-8 section-heading royal-gold heading-font">Merchandise</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-royal-gold to-white" />
			</div>

			{/* Image Container */}
			<div className="mx-auto flex flex-wrap justify-center gap-10">
				{/* Front Image - Hidden on Mobile */}
				<div className="hidden justify-center p-1 md:flex">
					<Image
						src={front}
						alt="T-Shirt Front"
						width={300}
						height={375}
						className="cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
						priority
						onClick={() =>
							openPage("https://register.revelsmit.in/merchandise-details?id=6411715fe7288a356b3aa0c9")
						}
					/>
				</div>

				{/* Back Image - Always Visible */}
				<div className="flex justify-center p-1">
					<Image
						src={back}
						alt="T-Shirt Back"
						width={300}
						height={375}
						className="cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
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
