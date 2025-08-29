import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React from "react"
import Slider from "react-slick"

const Announcements = (): React.JSX.Element => {
	const announcements = [
		"Welcome to our platform!",
		"Don't miss our latest updates.",
		"Check out our new features!",
		"Stay tuned for upcoming events.",
	]

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
	}

	return (
		<div className="absolute right-4 top-4 w-full max-w-xs rounded-lg bg-transparent p-2 sm:right-6 sm:max-w-sm sm:p-4">
							<p className="mb-1 text-center text-sm font-bold text-black sm:text-right sm:text-lg">Announcements</p>
			<hr className="mb-1 h-[1px] w-full border-0 bg-white sm:mb-2 sm:ml-auto sm:max-w-28" />
			<Slider {...settings}>
				{announcements.map((announcement, index) => (
					<div key={index} className="text-center sm:text-right">
						<p className="text-xs font-light text-black sm:text-lg">{announcement}</p>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Announcements
