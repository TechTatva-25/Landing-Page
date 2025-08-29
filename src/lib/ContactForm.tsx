"use client"
import React, { useState } from "react"

import ContactDetails2 from "./ContactFormCards"
import { useInView } from "./useInView"

const ContactUs = (): JSX.Element => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		query: "",
	})
	const [submitted, setSubmitted] = useState<string>("")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault()

		await fetch("/api/v1/query", {
			method: "POST",
			body: JSON.stringify(formData),
		})
			.then((r) => r.json())
			.then((r) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
				setSubmitted(r.data.message)
				setFormData({
					name: "",
					email: "",
					query: "",
				})
			})
			.catch((e) => {
				console.error(e)
				alert("Failed to submit query, please try again after a while")
			})
	}

	const { ref, isInView } = useInView()
	
	return (
		<section className="container mb-16 py-16" id="contact" ref={ref}>
			<div className="px-0 sm:px-8">
				<div className="mb-8 flex items-center justify-center">
					<span className={`section-heading royal-gradient-heading heading-font ${isInView ? 'in-view' : ''}`}>Contact Us</span>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex max-w-4xl flex-col items-center justify-center gap-16 md:items-start md:gap-8">
						<div className="w-full md:px-8">
							{!submitted && (
															<p className="body-font mb-6 text-center text-gray-700 sm:text-xl">
								Have questions about TechTatva 25? Need technical support or event details?
								<span className="inline sm:hidden"> </span>
								<br className="hidden sm:block" />
								We're here to help.
							</p>
							)}
							{submitted && (
								<div className="mb-4 space-y-5">
									<p className="text-center text-gray-500 dark:text-gray-400 sm:text-xl">
										{submitted}
									</p>
								</div>
							)}
							{!submitted && (
								<form
									onSubmit={(e) => {
										void handleSubmit(e)
									}}
									className="elegant-contact-form mt-8 space-y-6 md:mt-0">
									<div>
										<label
											htmlFor="name"
											className="text-royal-gold heading-font mb-2 block font-medium">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											className="royal-input"
											placeholder="Enter your full name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="text-royal-gold heading-font mb-2 block font-medium">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="royal-input"
											placeholder="Enter your email address"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<label
											htmlFor="query"
											className="text-royal-gold heading-font mb-2 block font-medium">
											Message
										</label>
										<textarea
											id="query"
											name="query"
											rows={6}
											className="royal-input"
											placeholder="Tell us about your query or feedback regarding TechTatva 25"
											value={formData.query}
											onChange={handleChange}
										/>
									</div>
									<div className="flex w-full justify-center">
										<button type="submit" className="glassmorphic-button royal-contact-submit">
											<span className="heading-font">Send Message</span>
										</button>
									</div>
								</form>
							)}
						</div>
						<ContactDetails2></ContactDetails2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
