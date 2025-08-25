import React from "react"

import { getMetadata } from "@/lib/_utils"
import ContactDetails from "@/lib/Contact"
// import ContactUs from "@/lib/ContactForm"
import ContactGrid from "@/lib/conveyers"

export const metadata = getMetadata("TechTatva 25 | Contact Us")

export default function Contact(): React.JSX.Element {
	return (
		<>
			<ContactGrid backToHomeButton={false}></ContactGrid>
			<ContactDetails></ContactDetails>
			{/* <ContactUs></ContactUs> */}
		</>
	)
}
