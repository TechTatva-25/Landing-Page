"use client"

import combo2 from "@/images/Combo1.jpg"
import combo1 from "@/images/Combo2.jpg"
import PassCard from "@/lib/PassCard"
import { useInView } from "./useInView"

const Combos = (): React.JSX.Element => {
	const { ref, isInView } = useInView()
	
	return (
		<div className="px-4 py-16" id="combos" ref={ref}>
			<div className="mb-8 flex items-center justify-center">
				<span className={`section-heading royal-gradient-heading heading-font ${isInView ? 'in-view' : ''}`}>Combo Deals</span>
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
