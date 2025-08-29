"use client"

import combo2 from "@/images/Combo1.jpg"
import combo1 from "@/images/Combo2.jpg"
import PassCard from "@/lib/PassCard"

const Combos = (): React.JSX.Element => {
	return (
		<div className="bg-black px-4 py-16" id="combos">
			<div className="mb-8 flex items-center">
				<hr className="to-royal-gold h-[2px] flex-grow border-0 bg-gradient-to-r from-white"></hr>
				<span className="section-heading royal-gold heading-font mx-8">Combo Deals</span>
				<hr className="from-royal-gold h-[2px] flex-grow border-0 bg-gradient-to-r to-white"></hr>
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
