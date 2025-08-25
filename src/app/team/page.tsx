import React from "react"

import { getMetadata } from "@/lib/_utils"
// import ContactDetails from "@/lib/Contact"
import ContactGrid from "@/lib/conveyers"

export const metadata = getMetadata("TechTatva 25 | Team")

export default function Contact(): React.JSX.Element {
	return (
		<>
			<ContactGrid></ContactGrid>
			{/* <ContactDetails></ContactDetails> */}
		</>
	)
}
