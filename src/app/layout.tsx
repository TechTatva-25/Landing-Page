import "../styles/globals.css"

import React from "react"

import { getMetadata } from "@/lib/_utils"

export const metadata = getMetadata("TechTatva 25")

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body>{children}</body>
		</html>
	)
}
