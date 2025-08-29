import React from "react"

import About from "@/lib/aboutrevels"
import Background from "@/lib/Background"
import Combos from "@/lib/Combos"
import ContactUs from "@/lib/ContactForm"
import Events from "@/lib/Events"
import FAQ from "@/lib/FAQ"
import FloatingHeader from "@/lib/FloatingHeader"
import Footer from "@/lib/Footer"
import Gallery from "@/lib/Gallery"
import Passes from "@/lib/Passes"
import Tshirt from "@/lib/Tshirt"
import Resources from "@/lib/Resources"
// import Sponsors from "@/lib/Sponsors"

export default function Home(): React.JSX.Element {
	return (
		<>
			<FloatingHeader></FloatingHeader>
			<Background></Background>

			<div className="vignette-overlay">
				<Passes></Passes>
				<Combos></Combos>
				<Events></Events>
				<Tshirt></Tshirt>
				<Gallery></Gallery>
				{/* <Sponsors></Sponsors> */}

				<About></About>

				<FAQ></FAQ>
				<ContactUs></ContactUs>
					<Resources></Resources>
				<Footer></Footer>
			</div>
		</>
	)
}
