import "../styles/globals.css"

import {
	Cinzel_Decorative,
	Cormorant_Garamond,
	Inter,
	Lora,
	Montserrat,
	Playfair_Display,
	Source_Sans_3,
} from "next/font/google"
import React from "react"

import { getMetadata } from "@/lib/_utils"

// Configure Google Fonts
const cinzelDecorative = Cinzel_Decorative({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-cinzel-decorative",
	display: "swap",
})

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair-display",
	display: "swap",
})

const cormorantGaramond = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-cormorant-garamond",
	display: "swap",
})

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
})

const sourceSans3 = Source_Sans_3({
	subsets: ["latin"],
	variable: "--font-source-sans-3",
	display: "swap",
})

export const metadata = getMetadata("TechTatva 25")

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html
			lang="en"
			className={`${cinzelDecorative.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable} ${montserrat.variable} ${inter.variable} ${lora.variable} ${sourceSans3.variable}`}>
			<head>
				{/* Favicon Setup for All Devices */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
				<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
				<link rel="manifest" href="/site.webmanifest" />
				
				{/* Performance optimizations */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://register.revelsmit.in" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
				<meta httpEquiv="x-dns-prefetch-control" content="on" />
				
				{/* Additional SEO Meta Tags */}
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
				<meta name="googlebot" content="index, follow" />
				<meta name="bingbot" content="index, follow" />
				<meta name="author" content="TechTatva 25 - MIT Manipal" />
				<meta name="publisher" content="MIT Manipal" />
				<meta name="copyright" content="TechTatva 25" />
				<meta name="theme-color" content="#d4a63c" />
				<meta name="msapplication-TileColor" content="#d4a63c" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				
				{/* Canonical URL */}
				<link rel="canonical" href="https://techtatva.in" />
				
				{/* Additional Performance */}
				<link rel="preload" href="/images_tt/Untitled design (1).png" as="image" />
			</head>
			<body>{children}</body>
		</html>
	)
}
