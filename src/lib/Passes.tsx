"use client"

import styles from "@/styles/passes.module.css"
import flagship from "../../public/images_tt/Flagship_Pass.jpg"
import general from "../../public/images_tt/General_Pass.jpg"
import proshow from "../../public/images_tt/Conclave_Pass.jpg"

import PassCard from "./PassCard"
import { useInView } from "./useInView"

const Passes = (): React.JSX.Element => {
	const { ref, isInView } = useInView()

	return (
		<div className="px-4 py-8" id="passes" ref={ref}>
			<div className="mb-12 flex items-center justify-center">
				<span className={`${styles.passesHeading} heading-font ${isInView ? "in-view" : ""}`}>Passes</span>
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
