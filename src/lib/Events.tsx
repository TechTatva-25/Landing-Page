"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import React, { useEffect, useState } from "react"
import Slider from "react-slick"

import { EventDetail } from "@/app/api/_utils"

// import ButtonCustom from "./buttonCustom"
import EventCard from "./EventCard"

const Events = (): React.JSX.Element => {
	const [events, setEvents] = useState<EventDetail[]>([])

	const settings = {
		dots: false,
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
					dots: false,
					arrows: false,
				},
			},
		],
	}

	useEffect(() => {
		async function fetchEvents(): Promise<void> {
			const data = (await fetch("/api/v1/events", {}).then((r) => r.json())) as { data: EventDetail[] }

			setEvents(data.data)
		}

		void fetchEvents()
	}, [])

	const cleanURL = (url: string): string => {
		return url.replace(/[^a-zA-Z0-9-_()& ]/g, "").toLowerCase()
	}

	return (
		<div className="bg-black px-4 py-16" id="events">
			<div className="my-8 flex items-center">
				<hr className="to-royal-gold h-[2px] flex-grow border-0 bg-gradient-to-r from-white" />
				<span className="section-heading royal-gold heading-font mx-8">Events</span>
				<hr className="from-royal-gold h-[2px] flex-grow border-0 bg-gradient-to-r to-white" />
			</div>

			<div className="mx-auto mb-12 mt-2 max-w-screen-xl">
				<div className="px-4">
					<Slider {...settings}>
						{events.map((e: EventDetail, index: number) => (
							<div key={index} className="px-4">
								<div className="flex justify-center">
									<EventCard
										link="https://register.revelsmit.in/dashboard"
										imageUrl={`/events/${cleanURL(e.event_name.toLowerCase())}.jpg`}
										// imageUrl={"/images/test.jpg"}
										date={e.event_date.split("T")[0].split("-").slice(1)[0]}
										day={e.event_date.split("T")[0].split("-").slice(1)[1]}
										eventName={e.event_name}
										// description={e.event_desc}
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
