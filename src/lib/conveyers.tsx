"use client"

// import React, { useState } from "react"
import { Home, Mail } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

import simran from "@/images/conveyers/simran.jpeg"
import yashya from "@/images/conveyers/yashya.jpg"
import diya from "@/images/diya.jpg"
import paarth from "@/images/paarth.jpeg"
import Developers from "@/lib/developers"

const ContactGrid = ({ backToHomeButton = true }: { backToHomeButton?: boolean }): React.JSX.Element => {
	const router = useRouter()
	// const [error, setError] = useState(null);

	const contacts = [
		{
			id: "1",
			name: "Yashya Garg",
			role: "Cultural Secretary",
			email: "culsec.scmit@manipal.edu",
			image: yashya,
			imageAlt: "yashya profile",
		},
		{
			id: "2",
			name: "Simran Jain",
			role: "Cultural Secretary",
			email: "culsec.scmit@manipal.edu",
			image: simran,
			imageAlt: "simran profile",
		},
		{
			id: "3",
			name: "Paarth Goel",
			role: "Sports Secretary",
			email: "sportssec.mitsc@manipal.edu",
			image: paarth,
			imageAlt: "parth profile",
		},
		{
			id: "4",
			name: "Diya Prashanth",
			role: "Sports Secretary",
			email: "sportssec.mitsc@manipal.edu",
			image: diya,
			imageAlt: "parth profile",
		},
	]

	return (
		<>
			<div className="mx-auto mt-8 max-w-7xl px-4 md:p-6">
				<div className="mb-8 flex items-center">
					<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
					<span className="mx-8 text-3xl font-bold text-blue-900">Conveners</span>
					<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
				</div>

				{/* {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>
      )} */}

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
					{contacts.map((contact) => (
						<div key={contact.id} className="rounded-lg border p-4 text-center shadow-md">
							<div className="relative mx-auto mb-4 h-[200px] w-[200px]">
								<Image
									src={contact.image}
									alt={contact.imageAlt}
									className="rounded-full object-cover"
									width={200}
									height={200}
								/>
							</div>
							<h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
							<p className="text-sm text-gray-600">{contact.role}</p>
							<div className="mt-3 flex items-center justify-center gap-2 text-gray-700">
								<Mail className="h-4 w-4" />
								<a href={`mailto:${contact.email}`} className="text-sm hover:text-blue-600">
									{contact.email}
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<Developers></Developers>
			<div className="mx-auto max-w-7xl">
				{backToHomeButton && (
					<div className="mb-8 flex w-full justify-center">
						<hr className="mt-4 h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
						<button
							onClick={() => router.push("/")}
							className="mx-6 flex w-full max-w-96 items-center justify-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-white transition-colors hover:bg-blue-700">
							<Home className="h-5 w-5" />
							<span>Back to Home</span>
						</button>
						<hr className="mt-4 h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
					</div>
				)}
			</div>
		</>
	)
}

export default ContactGrid
