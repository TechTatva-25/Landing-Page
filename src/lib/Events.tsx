"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React, { useEffect, useState } from "react"
import Slider from "react-slick"

import { EventDetail } from "@/app/api/_utils"
import { useInView } from "./useInView"
import styles from "@/styles/passes.module.css"

// import ButtonCustom from "./buttonCustom"
import EventCard from "./EventCard"

const Events = (): React.JSX.Element => {
	const [events, setEvents] = useState<EventDetail[]>([])

	const settings = {
		dots: false,
		infinite: true,
		speed: 500, // Faster transitions
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000, // Faster autoplay
		cssEase: "ease-out", // Simpler easing for better performance
		useTransform: true,
		lazyLoad: 'ondemand' as const,
		swipeToSlide: true,
		touchThreshold: 5,
		pauseOnHover: true,
		pauseOnFocus: true,
		waitForAnimate: false, // Don't wait for animation
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
					dots: false,
					arrows: false,
				},
			},
		],
	}

	useEffect(() => {
		async function fetchEvents(): Promise<void> {
			try {
				const response = await fetch("/api/v1/events", {
					cache: 'force-cache', // Cache the response
					next: { revalidate: 300 } // Revalidate every 5 minutes
				})
				
				if (response.ok) {
					const data = (await response.json()) as { data: EventDetail[] }
					setEvents(data.data)
				}
			} catch (error) {
				console.error('Failed to fetch events:', error)
			}
		}

		void fetchEvents()
	}, [])

	const cleanURL = (url: string): string => {
		return url.replace(/[^a-zA-Z0-9-_()& ]/g, "").toLowerCase()
	}

	const { ref, isInView } = useInView()
	
	return (
		<div className="px-4 py-8" id="events" ref={ref}>
			<div className="mb-12 flex items-center justify-center">
				<span className={`${styles.passesHeading} heading-font ${isInView ? 'in-view' : ''}`}>Events</span>
			</div>

			<div className="mx-auto mb-12 max-w-screen-xl">
				<div className="px-4">
					<Slider {...settings}>
						{events.map((e: EventDetail, index: number) => (
							<div key={index} className="px-4 py-2">
								<div className="flex justify-center h-full">
									<EventCard
										index={index}
										link="https://register.revelsmit.in/dashboard"
										imageUrl={`/events/${cleanURL(e.event_name.toLowerCase())}.jpg`}
										// imageUrl={"/images/test.jpg"}
										date={e.event_date.split("T")[0].split("-").slice(1)[0]}
										day={e.event_date.split("T")[0].split("-").slice(1)[1]}
										eventName={e.event_name}
										description={e.event_desc}
										clubName={e.category_name}
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>

			{/* <div className="flex justify-center">
				<ButtonCustom buttonContent="View All" link="https://register.revelsmit.in/dashboard" />
			</div> */}
		</div>
	)
}

export default Events
