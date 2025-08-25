"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React from "react"
import Slider from "react-slick"

import ButtonCustom from "./buttonCustom"

const Sponsors = (): React.JSX.Element => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "ease-in-out",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	}

	// Sample events array - replace with your actual events data
	const events = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9, // Add your event objects here
	]

	return (
		<div className="min-h-screen px-4" id="events">
			<div className="my-8 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
				<span className="mx-8 text-3xl font-bold text-blue-900">Sponsors</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
			</div>

			<div className="mx-auto mb-12 mt-12 max-w-screen-xl">
				{/* Add a wrapper div with padding to prevent cut-off due to negative margins */}
				<div className="px-4">
					<Slider {...settings}>
						{events.map((/*event,*/ index) => (
							<div key={index} className="px-4">
								<div className="flex justify-center"></div>
							</div>
						))}
					</Slider>
				</div>
			</div>

			<div className="flex justify-center">
				<ButtonCustom link="/events" buttonContent="view all" />
			</div>
		</div>
	)
}

export default Sponsors
