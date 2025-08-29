"use client"

import { useRouter } from "next/navigation"
import { FC, JSX } from "react"

import { Button } from "@/components/ui/button"
import DownloadButton from "@/lib/DownloadButton"

interface DownloadItem {
	label: string
	text: string
	type: "download"
	fileUrl: string
	fileName: string
}

interface RouteItem {
	label: string
	text: string
	type: "route"
	route: string
}

type FooterItem = DownloadItem | RouteItem

const Footer: FC = (): JSX.Element => {
	const router = useRouter()

	const downloads: FooterItem[] = [
		{
			label: "TechTatva Rulebook",
			fileUrl: "/rulebooks/techtatva_2025_rulebook.pdf",
			fileName: "techtatva_2025_rulebook.pdf",
			text: "Download",
			type: "download",
		},
		{
			label: "Event Timetable",
			fileUrl: "/rulebooks/techtatva_2025_timetable.pdf",
			fileName: "techtatva_2025_timetable.pdf",
			text: "Download",
			type: "download",
		},
		{
			label: "Registration Guide",
			route: "/registration", // Replace with your desired route
			text: "View",
			type: "route",
		},
	]

	return (
		<footer className="relative bg-black text-white">
			{/* Subtle overlay - matching hero section */}
			<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
			<div className="bg-gradient-radial-blur absolute inset-0" />

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Downloads Section */}
				<div className="mb-16">
					<h2 className="royal-gold heading-font mb-12 text-center text-3xl font-bold">Resources</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						{downloads.map((item, index) => (
							<div key={index} className="elegant-footer-card">
								<h3 className="royal-gold heading-font mb-4 text-xl font-semibold">{item.label}</h3>
								{item.type === "download" ? (
									<DownloadButton fileUrl={item.fileUrl} fileName={item.fileName} text={item.text} />
								) : (
									<Button onClick={() => router.push(item.route)} className="elegant-footer-button">
										{item.text}
									</Button>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Main Footer Content */}
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
					{/* Address */}
					<div className="space-y-6">
						<h3 className="royal-gold heading-font text-xl font-bold">Address</h3>
						<div className="body-font space-y-3 leading-relaxed text-gray-300">
							<p className="font-semibold text-white">Manipal Institute of Technology</p>
							<p>Manipal Academy of Higher Education (MAHE)</p>
							<p>Manipal, Karnataka 576104</p>
						</div>
					</div>

					{/* Social Links */}
					<div className="space-y-6">
						<h3 className="royal-gold heading-font text-xl font-bold">Connect With Us</h3>
						<div className="space-y-3">
							<a href="#" className="elegant-social-link">
								Instagram
							</a>
							<a href="#" className="elegant-social-link">
								Twitter
							</a>
							<a href="#" className="elegant-social-link">
								LinkedIn
							</a>
							<a href="#" className="elegant-social-link">
								YouTube
							</a>
						</div>
					</div>

					{/* Team */}
					<div className="space-y-6">
						<h3 className="royal-gold heading-font text-xl font-bold">Team</h3>
						<Button onClick={() => router.push("/team")} className="elegant-footer-button w-full sm:w-auto">
							Meet the Team
						</Button>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-royal-gold/20 mt-16 border-t pt-8 text-center">
					<p className="body-font text-gray-400">
						© 2025 TechTatva. All rights reserved. | Manipal Institute of Technology
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
