import React, { Suspense } from "react"
import dynamic from "next/dynamic"

import Background from "@/lib/Background"
import FloatingHeader from "@/lib/FloatingHeader"
import PerformanceMonitor from "@/lib/PerformanceMonitor"

// Dynamic imports for better code splitting and performance
const About = dynamic(() => import("@/lib/aboutrevels"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const Combos = dynamic(() => import("@/lib/Combos"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const ContactUs = dynamic(() => import("@/lib/ContactForm"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const Events = dynamic(() => import("@/lib/Events"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const FAQ = dynamic(() => import("@/lib/FAQ"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const Footer = dynamic(() => import("@/lib/Footer"), {
	loading: () => <div className="animate-pulse h-32 bg-gray-200 rounded-lg"></div>
})
const Gallery = dynamic(() => import("@/lib/Gallery"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const Passes = dynamic(() => import("@/lib/Passes"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const Tshirt = dynamic(() => import("@/lib/Tshirt"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
const Resources = dynamic(() => import("@/lib/Resources"), {
	loading: () => <div className="animate-pulse h-96 bg-gray-200 rounded-lg"></div>
})
// const Sponsors = dynamic(() => import("@/lib/Sponsors"))

// Loading component for better UX
const LoadingSpinner = () => (
	<div className="flex items-center justify-center h-32">
		<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-gold"></div>
	</div>
)

export default function Home(): React.JSX.Element {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Event",
		"name": "TechTatva 25",
		"description": "MIT Manipal's premier technical festival featuring cutting-edge technology competitions, workshops, hackathons, and innovation showcases.",
		"startDate": "2025-03-15",
		"endDate": "2025-03-18",
		"eventStatus": "https://schema.org/EventScheduled",
		"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
		"location": {
			"@type": "Place",
			"name": "Manipal Institute of Technology",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "MIT Campus",
				"addressLocality": "Manipal",
				"addressRegion": "Karnataka",
				"postalCode": "576104",
				"addressCountry": "IN"
			}
		},
		"organizer": {
			"@type": "Organization",
			"name": "TechTatva 25 - MIT Manipal",
			"url": "https://techtatva.in"
		},
		"offers": {
			"@type": "Offer",
			"url": "https://register.techtatva.in",
			"price": "0",
			"priceCurrency": "INR",
			"availability": "https://schema.org/InStock"
		},
		"image": "https://techtatva.in/images_tt/Untitled design (1).png",
		"url": "https://techtatva.in"
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<PerformanceMonitor />
			<FloatingHeader />
			<Background />

			<div className="vignette-overlay">
				<Suspense fallback={<LoadingSpinner />}>
					<Passes />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<Combos />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<Events />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<Tshirt />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<Gallery />
				</Suspense>
				
				{/* <Suspense fallback={<LoadingSpinner />}>
					<Sponsors />
				</Suspense> */}

				<Suspense fallback={<LoadingSpinner />}>
					<About />
				</Suspense>

				<Suspense fallback={<LoadingSpinner />}>
					<FAQ />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<ContactUs />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<Resources />
				</Suspense>
				
				<Suspense fallback={<LoadingSpinner />}>
					<Footer />
				</Suspense>
			</div>
		</>
	)
}
