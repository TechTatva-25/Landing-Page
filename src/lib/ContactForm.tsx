"use client"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"

import ContactDetails2 from "./ContactFormCards"

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

	return (
		<section className="container mb-16 bg-white dark:bg-gray-900 sm:mt-8" id="contact">
			<div className="px-0 sm:px-8">
				<div className="mb-8 flex sm:items-center">
					<hr className="invisible h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900 opacity-30 sm:visible"></hr>
					<span className="mx-8 flex w-full justify-center text-4xl font-bold text-blue-900 sm:w-fit">
						Contact Us
					</span>
					<hr className="invisible h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white opacity-30 sm:visible"></hr>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex max-w-4xl flex-col items-center justify-center gap-16 md:items-start md:gap-8">
						<div className="w-full md:px-8">
							{!submitted && (
								<p className="mb-4 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
									Got a technical issue? Need details about passes? Want to send feedback about an
									event?
									<p className="inline sm:hidden"> </p>
									<br className="hidden sm:block" />
									Let us know.
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
									className="mt-8 space-y-5 md:mt-0">
									<div>
										<label
											htmlFor="nane"
											className="mb-2 block font-medium text-gray-900 dark:text-gray-300">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
											placeholder="Enter your full name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="mb-2 block font-medium text-gray-900 dark:text-gray-300">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
											placeholder="Enter your email ID"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="sm:col-span-2">
										<label
											htmlFor="query"
											className="mb-2 block font-medium text-gray-900 dark:text-gray-400">
											Message
										</label>
										<textarea
											id="query"
											name="query"
											rows={6}
											className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
											placeholder="Enter your message"
											value={formData.query}
											onChange={handleChange}
										/>
									</div>
									<div className="flex w-full justify-center">
										<Button
											type="submit"
											variant="destructive"
											className="flex w-full items-center gap-2 bg-blue-900 hover:bg-blue-700">
											Submit
										</Button>
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
