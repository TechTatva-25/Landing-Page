"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Image from "next/image"
import React, { useRef } from "react"
import Slider from "react-slick"

import image1 from "../images/gallery/1.jpg"
import { useInView } from "./useInView"
import image2 from "../images/gallery/2.jpg"
import image3 from "../images/gallery/3.jpg"
import image4 from "../images/gallery/4.jpg"
import image5 from "../images/gallery/5.jpg"
import image6 from "../images/gallery/6.jpg"
import image7 from "../images/gallery/7.jpg"
import image8 from "../images/gallery/8.jpg"
import image9 from "../images/gallery/9.jpg"
import image10 from "../images/gallery/10.jpg"
import image11 from "../images/gallery/11.jpg"
import image12 from "../images/gallery/12.jpg"
import image13 from "../images/gallery/13.jpg"
import image14 from "../images/gallery/14.jpg"
import image15 from "../images/gallery/15.jpg"
import image16 from "../images/gallery/16.jpg"
import image17 from "../images/gallery/17.jpg"
import image18 from "../images/gallery/18.jpg"
import image19 from "../images/gallery/19.jpg"
import image20 from "../images/gallery/20.jpg"
import image21 from "../images/gallery/21.jpg"
import image22 from "../images/gallery/22.jpg"
import image23 from "../images/gallery/23.jpg"
import image24 from "../images/gallery/24.jpg"
import image25 from "../images/gallery/25.jpg"
import image26 from "../images/gallery/26.jpg"
import image27 from "../images/gallery/27.jpg"
import image28 from "../images/gallery/28.jpg"
import image29 from "../images/gallery/29.jpg"
import image30 from "../images/gallery/30.jpg"
import image31 from "../images/gallery/31.jpg"
import image32 from "../images/gallery/32.jpg"
import image33 from "../images/gallery/33.jpg"
import image34 from "../images/gallery/34.jpg"
import image35 from "../images/gallery/35.jpg"
import image36 from "../images/gallery/36.jpg"
import image37 from "../images/gallery/37.jpg"
import image38 from "../images/gallery/38.jpg"
import image39 from "../images/gallery/39.jpg"
import image40 from "../images/gallery/40.jpg"
import image41 from "../images/gallery/41.jpg"
import image42 from "../images/gallery/42.jpg"
import image43 from "../images/gallery/43.jpg"

const galleryImages = [
	{ id: 1, image: image1, alt: "Gallery image 1" },
	{ id: 2, image: image2, alt: "Gallery image 2" },
	{ id: 3, image: image3, alt: "Gallery image 3" },
	{ id: 4, image: image4, alt: "Gallery image 4" },
	{ id: 5, image: image5, alt: "Gallery image 5" },
	{ id: 6, image: image6, alt: "Gallery image 6" },
	{ id: 7, image: image7, alt: "Gallery image 7" },
	{ id: 8, image: image8, alt: "Gallery image 8" },
	{ id: 9, image: image9, alt: "Gallery image 9" },
	{ id: 10, image: image10, alt: "Gallery image 10" },
	{ id: 11, image: image11, alt: "Gallery image 11" },
	{ id: 12, image: image12, alt: "Gallery image 12" },
	{ id: 13, image: image13, alt: "Gallery image 13" },
	{ id: 14, image: image14, alt: "Gallery image 14" },
	{ id: 15, image: image15, alt: "Gallery image 15" },
	{ id: 16, image: image16, alt: "Gallery image 16" },
	{ id: 17, image: image17, alt: "Gallery image 17" },
	{ id: 18, image: image18, alt: "Gallery image 18" },
	{ id: 19, image: image19, alt: "Gallery image 19" },
	{ id: 20, image: image20, alt: "Gallery image 20" },
	{ id: 21, image: image21, alt: "Gallery image 21" },
	{ id: 22, image: image22, alt: "Gallery image 22" },
	{ id: 23, image: image23, alt: "Gallery image 23" },
	{ id: 24, image: image24, alt: "Gallery image 24" },
	{ id: 25, image: image25, alt: "Gallery image 25" },
	{ id: 26, image: image26, alt: "Gallery image 26" },
	{ id: 27, image: image27, alt: "Gallery image 27" },
	{ id: 28, image: image28, alt: "Gallery image 28" },
	{ id: 29, image: image29, alt: "Gallery image 29" },
	{ id: 30, image: image30, alt: "Gallery image 30" },
	{ id: 31, image: image31, alt: "Gallery image 31" },
	{ id: 32, image: image32, alt: "Gallery image 32" },
	{ id: 33, image: image33, alt: "Gallery image 33" },
	{ id: 34, image: image34, alt: "Gallery image 34" },
	{ id: 35, image: image35, alt: "Gallery image 35" },
	{ id: 36, image: image36, alt: "Gallery image 36" },
	{ id: 37, image: image37, alt: "Gallery image 37" },
	{ id: 38, image: image38, alt: "Gallery image 38" },
	{ id: 39, image: image39, alt: "Gallery image 39" },
	{ id: 40, image: image40, alt: "Gallery image 40" },
	{ id: 41, image: image41, alt: "Gallery image 41" },
	{ id: 42, image: image42, alt: "Gallery image 42" },
	{ id: 43, image: image43, alt: "Gallery image 43" },
]

const Gallery = (): React.JSX.Element => {
	const sliderRef = useRef<Slider>(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "ease-in-out",
		pauseOnHover: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	const nextSlide = (): void => {
		sliderRef.current?.slickNext()
	}

	const prevSlide = (): void => {
		sliderRef.current?.slickPrev()
	}

	const { ref, isInView } = useInView()
	
	return (
		<section className="px-4 py-16" id="gallery" ref={ref}>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="my-8 flex items-center justify-center">
					<h2 className={`section-heading royal-gradient-heading heading-font ${isInView ? 'in-view' : ''}`}>Gallery</h2>
				</div>

				{/* Slider Section with Custom Navigation */}
				<div className="relative mx-auto w-full max-w-6xl p-4">
					{/* Custom Previous Button */}
					<button
						onClick={prevSlide}
						className="border-royal-gold bg-royal-gold/20 text-royal-gold hover:bg-royal-gold absolute left-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-2 p-3 backdrop-blur-sm transition-all duration-300 hover:text-black hover:shadow-[0_0_20px_rgba(218,165,32,0.8)] focus:outline-none"
						aria-label="Previous image">
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					{/* Custom Next Button */}
					<button
						onClick={nextSlide}
						className="border-royal-gold bg-royal-gold/20 text-royal-gold hover:bg-royal-gold absolute right-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full border-2 p-3 backdrop-blur-sm transition-all duration-300 hover:text-black hover:shadow-[0_0_20px_rgba(218,165,32,0.8)] focus:outline-none"
						aria-label="Next image">
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					<Slider ref={sliderRef} {...settings}>
						{galleryImages.map(({ id, image, alt }) => (
							<div key={id} className="p-2">
								<div className="gallery-image-container group relative aspect-[4/4] w-full cursor-pointer overflow-hidden rounded-lg shadow-lg">
									<Image src={image} alt={alt} fill className="object-cover" />
									{/* Enhanced golden overlay with gothic effect */}
									<div className="gallery-golden-overlay"></div>
								</div>
							</div>
						))}
					</Slider>
				</div>

				{/* Decorative Golden Dots */}
				<div className="mt-8 flex justify-center space-x-2">
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className="bg-royal-gold/30 hover:bg-royal-gold h-2 w-2 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(218,165,32,0.6)]"></div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Gallery
