"use client"

import combo1 from "../../public/images_tt/Combo-1(Conclave+merch).jpg"
import combo2 from "../../public/images_tt/Combo-2 (flagship and merch).jpg"
import PassCard from "@/lib/PassCard"
import { useInView } from "./useInView"
import styles from "@/styles/passes.module.css"

const Combos = (): React.JSX.Element => {
	const { ref, isInView } = useInView()
	
	return (
		<div className="px-4 py-16" id="combos" ref={ref}>
			<div className="mb-8 flex items-center justify-center">
				<span className={`${styles.passesHeading} heading-font ${isInView ? "in-view" : ""}`}>Combo Deals</span>
			</div>
			<div className="mx-auto mt-8 flex max-w-screen-xl items-center justify-center">
				<div className="flex flex-wrap justify-center gap-6">
					<PassCard
						index={0}
						link="https://register.techtatva.in/dashboard"
						passType="Tech Bundle Pro"
						description="Tech Showcase + General Pass + Exclusive TechTatva 25 merchandise including premium tech gear and limited edition collectibles."
						imageUrl={combo1}></PassCard>
					<PassCard
						index={1}
						link="https://register.techtatva.in/dashboard"
						passType="Complete Access"
						description="Tech Showcase + Flagship Pass + Premium merchandise package with exclusive access to VIP networking sessions and industry meetups."
						imageUrl={combo2}></PassCard>
				</div>
			</div>
		</div>
	)
}
export default Combos
