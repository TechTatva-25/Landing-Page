"use client"
// import ButtonCustom from "./buttonCustom"
import flagship from "@/images/Flagship.jpg"
import general from "@/images/General.jpg"
import proshow from "@/images/ProShow.jpg"

import PassCard from "./PassCard"

const Passes = (): React.JSX.Element => {
	return (
		<div className="mt-20" id="passes">
			<div className="mb-8 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900"></hr>
				<span className="mx-8 text-3xl font-bold text-blue-900">Passes</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white"></hr>
			</div>

			<div className="mx-auto mb-12 flex max-w-screen-xl items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<PassCard
						link="https://register.revelsmit.in/events?id=63f4c8a5b80f7e5877c2c9c9&card=FLAGSHIP"
						passType="Flagship"
						description="To get access to participate in all the events of TechTatva, including our trendy flagship events and general events, you buy the flagship card."
						imageUrl={flagship}></PassCard>
					<PassCard
						link="https://register.revelsmit.in/events?id=63ef4583c44745229f119132&card=GENERAL"
						passType="General"
						description="There are over 35 events apart from the flagship events and to get access to participate in those events, you need to buy the general card."
						imageUrl={general}></PassCard>
					<PassCard
						link="https://register.revelsmit.in/proshow?id=63ef728c013f6453b98b6285"
						passType="Proshow"
						description="Experience one of the grandest spectacles of Revels, featuring renowned artists, electrifying performances across diverse genres — including stand-up comedy, celebrated singers, and top bands — all coming together for an unforgettable show!"
						imageUrl={proshow}></PassCard>
				</div>
			</div>
			{/* <ButtonCustom link={"/gallery"} buttonContent="view passes"></ButtonCustom> */}
		</div>
	)
}
export default Passes
