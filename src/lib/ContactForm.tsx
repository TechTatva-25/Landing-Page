"use client"
import React, { useState } from "react"

import ContactDetails2 from "./ContactFormCards"
import { useInView } from "./useInView"
import styles from "@/styles/passes.module.css"
import contactStyles from "@/styles/contact.module.css"

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
			<section id="contact" ref={ref} className={contactStyles.contactSection}>
				<div className={contactStyles.contactShell}>
					<div className={contactStyles.contactBackdrop}></div>
					<div className="mb-12 flex justify-center">
						<span className={`${styles.passesHeading} heading-font ${isInView ? 'in-view' : ''}`}>Contact Us</span>
					</div>
					<div className={contactStyles.formAndInfoWrapper}>
						{/* Form Panel */}
						<div className={`${contactStyles.royalPanel} ${'fadeInUp'}`}>
							{!submitted && (
								<p className={contactStyles.contactIntro}>
									Have questions about TechTatva 25? Need technical support or event details? We are here to help.
								</p>
							)}
							{submitted && (
								<div className="text-center">
									<p className="heading-font text-sm tracking-wide text-amber-200/80">{submitted}</p>
								</div>
							)}
							{!submitted && (
								<form
									onSubmit={(e) => { void handleSubmit(e) }}
									className={contactStyles.formFields}>
									<div className="fieldGroup">
										<label htmlFor="name">Name</label>
										<input id="name" name="name" type="text" className={contactStyles.inputBase} placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
									</div>
									<div className="fieldGroup">
										<label htmlFor="email">Email</label>
										<input id="email" name="email" type="email" className={contactStyles.inputBase} placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
									</div>
									<div className="fieldGroup">
										<label htmlFor="query">Message</label>
										<textarea id="query" name="query" className={contactStyles.inputBase} placeholder="Tell us your query or feedback" value={formData.query} onChange={handleChange} rows={6} />
									</div>
									<div className={contactStyles.submitRow}>
										<button type="submit" className={contactStyles.royalContactBtn}>
											<span>Send Message</span>
										</button>
									</div>
								</form>
							)}
						</div>
							{/* New centered Key Contacts heading outside the info card */}
							<div className="flex justify-center -mt-4">
								<span className={`${styles.passesHeading} heading-font text-3xl sm:text-4xl ${isInView ? 'in-view' : ''}`}>Key Contacts</span>
							</div>
						{/* Info Panel */}
						<div className={`${contactStyles.infoPanel} fadeInUp`}>
							<div className={contactStyles.infoCard}>
								{/* Removed internal h3; heading now outside */}
								<ContactDetails2 />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

export default ContactUs
