"use client"
// import ButtonCustom from "./buttonCustom"
import flagship from "@/images/Flagship.jpg"
import general from "@/images/General.jpg"
import proshow from "@/images/ProShow.jpg"

import PassCard from "./PassCard"

const Passes = (): React.JSX.Element => {
	return (
		<div className="px-4 py-16 bg-black" id="passes">
			<div className="mb-8 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-royal-gold"></hr>
				<span className="mx-8 section-heading royal-gold heading-font">Passes</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-royal-gold to-white"></hr>
			</div>

			<div className="mx-auto mb-12 flex max-w-screen-xl items-center justify-center">
							<div className="flex flex-wrap justify-center gap-6">
				<PassCard
					index={0}
					link="https://register.techtatva.in/events?card=FLAGSHIP"
					passType="Flagship Pass"
					description="Access to all TechTatva 25 events including cutting-edge workshops, coding competitions, tech talks, and our prestigious flagship events showcasing the latest innovations in technology."
					imageUrl={flagship}></PassCard>
				<PassCard
					index={1}
					link="https://register.techtatva.in/events?card=GENERAL"
					passType="General Pass"
					description="Participate in 35+ technical events including hackathons, robotics competitions, AI/ML workshops, and networking sessions with industry professionals and tech enthusiasts."
					imageUrl={general}></PassCard>
				<PassCard
					index={2}
					link="https://register.techtatva.in/proshow"
					passType="Tech Showcase"
					description="Witness the grandest technology showcase featuring live demonstrations, product launches, startup pitches, and keynote speeches from industry leaders and tech innovators."
					imageUrl={proshow}></PassCard>
			</div>
			</div>
			{/* <ButtonCustom link={"/gallery"} buttonContent="view passes"></ButtonCustom> */}
		</div>
	)
}
export default Passes
