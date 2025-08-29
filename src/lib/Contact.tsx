"use client"

import { Mail, Phone } from "lucide-react"
import { FC } from "react"

const ContactDetails: FC = (): JSX.Element => {
	const contactGroups = [
		{
			id: "technical",
			title: "Technical Queries",
			color: "from-blue-500 to-purple-500",
			contacts: [
				{
					id: "1",
					name: "Dillon Asher Almeida",
					phone: "8668633682",
				},
				{
					id: "2",
					name: "Palak Agarwal",
					phone: "9330956584",
				},
			],
		},
		{
			id: "cultural",
			title: "Cultural and Conclave Queries",
			color: "from-green-500 to-teal-500",
			contacts: [
				{
					id: "3",
					name: "Yashya Garg",
					phone: "7710937898",
				},
				{
					id: "4",
					name: "Simran Jain",
					phone: "8777713463",
				},
			],
		},
		{
			id: "sports",
			title: "Sports Queries",
			color: "from-orange-500 to-red-500",
			contacts: [
				{
					id: "5",
					name: "Diya Prashant",
					phone: "7760281313",
				},
				{
					id: "6",
					name: "Paarth Goel",
					phone: "9321793974",
				},
			],
		},
		{
			id: "nonmahe",
			title: "Non-MAHE Student Queries",
			color: "from-purple-500 to-pink-500",
			contacts: [
				{
					id: "7",
					name: "Aprameya Ansh",
					phone: "6200949283",
				},
				{
					id: "8",
					name: "Stuti Das",
					phone: "9205178790",
				},
			],
		},
	]

	return (
		<div className="mx-auto max-w-7xl p-4 md:p-6">
			<div className="my-8 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
				<span className="mx-8 text-center text-3xl font-bold text-blue-900">Contact Information</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{contactGroups.map((group) => (
					<div key={group.id} className="rounded-lg border p-6 shadow-md">
						<div className="mb-6 flex items-center">
							<hr className={`h-[2px] flex-grow border-0 bg-gradient-to-r ${group.color}`} />
							<span className="mx-4 text-center text-xl font-semibold">{group.title}</span>
							<hr className={`h-[2px] flex-grow border-0 bg-gradient-to-r ${group.color}`} />
						</div>

						<div className="space-y-4">
							{group.contacts.map((contact) => (
								<div
									key={contact.id}
									className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
									<span className="font-medium text-gray-900">{contact.name}</span>
									<a
										href={`tel:${contact.phone}`}
										className="flex items-center gap-2 text-gray-700 transition-colors hover:text-blue-600">
										<Phone className="h-4 w-4" />
										<span>{contact.phone}</span>
									</a>
								</div>
							))}

							{group.id === "nonmahe" && (
								<div className="mt-4 flex items-center justify-center gap-2 text-gray-700">
									<Mail className="h-4 w-4" />
									<a href="mailto:outstation.revels@manipal.edu" className="hover:text-blue-600">
										outstation.revels@manipal.edu
									</a>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ContactDetails
