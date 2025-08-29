import React from "react"
import { Cormorant_Garamond, Inter, Lora, Montserrat, Playfair_Display, Source_Sans_3 } from "next/font/google"

import "../styles/globals.css"

import { getMetadata } from "@/lib/_utils"

// Configure Google Fonts
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
				className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${montserrat.variable} ${inter.variable} ${lora.variable} ${sourceSans3.variable}`}
			>
				<head>
					<link rel="icon" href="/favicon.ico" sizes="any" />
				</head>
				<body>{children}</body>
			</html>
	)
}
