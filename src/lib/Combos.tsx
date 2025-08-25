"use client"

import combo2 from "@/images/Combo1.jpg"
import combo1 from "@/images/Combo2.jpg"
import PassCard from "@/lib/PassCard"

const Combos = (): React.JSX.Element => {
	return (
		<div className="py-2" id="passes">
			<div className="m85 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900"></hr>
				<span className="mx-8 text-3xl font-bold text-blue-900">Combos</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white"></hr>
			</div>
			<div className="mx-auto mt-8 flex max-w-screen-xl items-center justify-center">
				<div className="flex flex-wrap justify-center gap-4">
					<PassCard
						link="https://register.revelsmit.in/dashboard"
						passType="Proshow Pass + General Pass + Merchandise
"
						imageUrl={combo1}></PassCard>
					<PassCard
						link="https://register.revelsmit.in/dashboard"
						passType="Proshow Pass + Flagship Pass + Merchandise"
						imageUrl={combo2}></PassCard>
				</div>
			</div>
		</div>
	)
}
export default Combos
