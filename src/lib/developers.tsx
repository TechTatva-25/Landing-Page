"use client"

// import React, { useState } from 'react';
// import { Mail, Home} from 'lucide-react';
// import { useRouter } from 'next/navigation';

import { Mail } from "lucide-react"
import Image from "next/image"
import React from "react"

import dillon from "@/images/conveyers/dillon.jpg"
import lokesh from "@/images/conveyers/lokesh.jpeg"
import palak from "@/images/conveyers/palak.jpg"
import prashant from "@/images/conveyers/prashant.jpg"
import rohit from "@/images/conveyers/rohit.jpg"
import triyan from "@/images/conveyers/triyan.jpeg"

const DevGrid = (): React.JSX.Element => {
	// const router = useRouter();
	// const [error, setError] = useState(null);

	const contacts = [
		{
			id: "1",
			name: "Dillon Almeida",
			role: "Technical Secretary",
			email: "techsec.scmit@manipal.edu",
			image: dillon,
			imageAlt: "Dillon Almeida",
		},
		{
			id: "2",
			name: "Palak Agarwal",
			role: "Technical Secretary",
			email: "techsec.scmit@manipal.edu",
			image: palak,
			imageAlt: "Palak Agarwal",
		},
		{
			id: "3",
			name: "Rohit Raj",
			role: "Vice President",
			email: "vicepresidentpg.mit@manipal.edu",
			image: rohit,
			imageAlt: "Rohit Raj",
		},
		{
			id: "4",
			name: "Lokesh Varma Sagi",
			role: "Developer",
			email: "lokesh.personal28@gmail.com",
			image: lokesh,
			imageAlt: "Lokesh Varma Sagi",
		},
		{
			id: "5",
			name: "Triyan Mukherjee",
			role: "Developer",
			email: "triyanmukherjee@gmail.com",
			image: triyan,
			imageAlt: "Triyan Mukherjee",
		},
		{
			id: "6",
			name: "Prashant K",
			role: "Developer",
			email: "prashant.k@incoming.slmail.me",
			image: prashant,
			imageAlt: "Prashant K",
		},
	]

	return (
		<div className="mx-auto mb-8 max-w-7xl p-4 md:p-6">
			<div className="mb-8 mt-4 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
				<span className="mx-8 text-3xl font-bold text-blue-900">Developers</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
			</div>

			{/* {error && <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">{error}</div>} */}

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
	)
}

export default DevGrid
