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
				{contactGroups.map((group, index) => (
					<div key={group.id} className="premium-contact-card group">
						{/* Royal Header */}
						<div className="mb-6 relative">
							<div className="flex items-center">
								<hr className={`h-[2px] flex-grow border-0 bg-gradient-to-r ${group.color}`} />
								<span className="mx-4 text-center text-xl font-normal heading-font royal-gradient-heading px-3">
									{group.title}
								</span>
								<hr className={`h-[2px] flex-grow border-0 bg-gradient-to-r ${group.color}`} />
							</div>
							{/* Royal decorative accent */}
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-royal-gold rounded-full opacity-60"></div>
						</div>

						{/* Premium Contact Items */}
						<div className="space-y-4">
							{group.contacts.map((contact) => (
								<div
									key={contact.id}
									className="premium-contact-item">
									<div className="flex items-center justify-between w-full">
										<div className="flex flex-col">
											<span className="font-medium text-white body-font text-lg">{contact.name}</span>
											<span className="text-royal-gold text-sm heading-font opacity-80">Team Lead</span>
										</div>
										<div className="flex flex-col items-end">
											<div className="flex items-center gap-2 text-royal-gold">
												<Phone className="h-4 w-4" />
												<span className="font-medium">{contact.phone}</span>
											</div>
											<a
												href={`tel:${contact.phone}`}
												className="text-gray-400 text-xs mt-1 hover:text-royal-gold transition-colors">
												Click to call
											</a>
										</div>
									</div>
									{/* Contact item glow effect */}
									<div className="absolute inset-0 bg-gradient-to-r from-royal-gold/5 via-transparent to-royal-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
								</div>
							))}

							{group.id === "registration" && (
								<div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-royal-gold/10 to-transparent border border-royal-gold/30">
									<div className="flex items-center justify-between w-full">
										<div className="flex flex-col">
											<span className="font-medium text-white body-font text-lg">General Email</span>
											<span className="text-royal-gold text-sm heading-font opacity-80">Support Team</span>
										</div>
										<div className="flex flex-col items-end">
											<div className="flex items-center gap-2 text-royal-gold">
												<Mail className="h-4 w-4" />
												<span className="font-medium">info@techtatva.in</span>
											</div>
											<a
												href="mailto:info@techtatva.in"
												className="text-gray-400 text-xs mt-1 hover:text-royal-gold transition-colors">
												Click to email
											</a>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Royal bottom accent */}
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent"></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ContactDetails2
