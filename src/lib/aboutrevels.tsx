import Image from "next/image"
import React from "react"

import revels from "@/images/elysium_logo_blue.png"
import mit from "@/images/mitlogo.png"

const About: React.FC = (): JSX.Element => {
	return (
		<div className="sm:px-32">
			{/* Hero Section */}
			<section className="container mx-auto" id="about">
				<div className="my-8 flex items-center">
					<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
					<h2 className="mx-8 text-4xl font-bold text-blue-900">About</h2>
					<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
				</div>

				<div className="grid items-center gap-8 lg:grid-cols-2">
					<div className="relative mx-auto h-32 w-64 sm:w-96">
						<Image src={revels} alt="TechTatva Logo" fill className="object-contain" />
					</div>

					<div className="space-y-4">
						{/* <h1 className="text-4xl font-bold text-blue-900">About</h1> */}
						{/* <p className="text-blue-900">Get to TechTatva better</p> */}

						<div className="space-y-4">
							{/* <h2 className="text-3xl font-bold text-blue-900">TechTatva 25</h2> */}

							<p className="text-justify">
								Revels is the annual cultural festival of Manipal Institute of Technology, Manipal,
								heralded by the onset of spring. Conducted over a period of four days, including a much
								celebrated sports tournament called Revels Cup, the fest is a junction of a plethora of
								events. Whether it be Literature, Music, Dance, Dramatics, Quiz, Debate, Fashion, Art,
								Comedy, and Professional concerts, the fest boasts of throngs of 'thorns to
								competition'. Every year, thousands of students from colleges all over the country, as
								well as international delegations assemble together to make Revels one of the largest
								nexuses of cultural exchange.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-8">
				<div className="grid items-center gap-8 lg:grid-cols-2">
					<div className="mx-4 space-y-4">
						<h2 className="text-2xl font-bold text-blue-900">History</h2>
						{/* <h3 className="text-3xl font-bold text-blue-900">Manipal Institute of Technolory</h3> */}

						<p className="text-justify">
							In 1982, Manipal Institute of Technology, Manipal, celebrated its Ruby Jubilee. To
							commemorate the milestone, the administration and the students came up with a string of
							events, that aimed at propagating Arts and Culture. From these efforts was born Revels-82-
							"Stormy Interlude", the first edition of the cultural fest, presided by dignitaries led by
							Shri Govind Narain (then Governor of Karnataka state). Over time, the fest has grown to
							mammoth proportions, boasting both sustained participation and an enthused Organizing Team.
						</p>

						{/* <button className="flex items-center space-x-2 text-blue-900">
							<span>Learn More</span>
							<span>→</span>
						</button> */}
					</div>

					<div className="flex w-full justify-center">
						<div className="relative h-40 w-40 sm:h-64 sm:w-64">
							<Image src={mit} alt="MIT Logo" fill className="rounded-full object-cover" />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
