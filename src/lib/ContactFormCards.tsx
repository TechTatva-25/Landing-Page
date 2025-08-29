"use client"

import { Mail, Phone } from "lucide-react"
import { FC } from "react"

const ContactDetails2: FC = (): JSX.Element => {
	const contactGroups = [
		{
			id: "technical",
			title: "Technical Queries",
			color: "from-royal-gold to-yellow-500",
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
			title: "Innovation and Tech Showcase",
			color: "from-royal-gold to-yellow-500",
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
			id: "workshops",
			title: "Workshops and Competitions",
			color: "from-royal-gold to-yellow-500",
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
			id: "registration",
			title: "Registration and General Queries",
			color: "from-royal-gold to-yellow-500",
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
		<div className="w-full md:mt-4 md:px-8">
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
				{contactGroups.map((group) => (
					<div key={group.id} className="premium-contact-card group">
						{/* Royal Header */}
						<div className="relative mb-6">
							<div className="flex items-center justify-center">
								<span className="heading-font royal-gold text-xl font-normal">
									{group.title}
								</span>
							</div>

						</div>

						{/* Premium Contact Items */}
						<div className="space-y-4">
							{group.contacts.map((contact) => (
								<div key={contact.id} className="premium-contact-item">
									<div className="flex w-full items-center justify-between">
										<div className="flex flex-col">
											<span className="body-font text-lg font-medium text-black">
												{contact.name}
											</span>
											<span className="text-royal-gold heading-font text-sm opacity-80">
												Team Lead
											</span>
										</div>
										<div className="flex flex-col items-end">
											<div className="text-royal-gold flex items-center gap-2">
												<Phone className="h-4 w-4" />
												<span className="text-lg font-medium">{contact.phone}</span>
											</div>
											<a
												href={`tel:${contact.phone}`}
												className="hover:text-royal-gold mt-1 text-xs text-gray-700 transition-colors">
												Call now
											</a>
										</div>
									</div>

								</div>
							))}

							{group.id === "registration" && (
								<div className="premium-contact-item mt-4">
									<div className="flex w-full items-center justify-between">
										<div className="flex flex-col">
											<span className="body-font text-lg font-medium text-black">
												General Support
											</span>
											<span className="text-royal-gold heading-font text-sm opacity-80">
												Email Support
											</span>
										</div>
										<div className="flex flex-col items-end">
											<div className="text-royal-gold flex items-center gap-2">
												<Mail className="h-4 w-4" />
												<span className="text-lg font-medium">info@techtatva.in</span>
											</div>
											<a
												href="mailto:info@techtatva.in"
												className="hover:text-royal-gold mt-1 text-xs text-gray-700 transition-colors">
												Send email
											</a>
										</div>
									</div>
								</div>
							)}
						</div>


					</div>
				))}
			</div>
		</div>
	)
}

export default ContactDetails2
