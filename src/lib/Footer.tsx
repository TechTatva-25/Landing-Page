"use client"

import { useRouter } from "next/navigation"
import { FC, JSX } from "react"

import { Button } from "@/components/ui/button"
import DownloadButton from "@/lib/DownloadButton"
import Socials from "@/lib/Socials"

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
			label: "Sports Rulebook",
			fileUrl: "/rulebooks/revels_2025_sports_rulebook.pdf",
			fileName: "revels_2025_sports_rulebook.pdf",
			text: "Download",
			type: "download",
		},
		{
			label: "Cultural Rulebook",
			fileUrl: "/rulebooks/revels_2025_cultural_rulebook.pdf",
			fileName: "revels_2025_cultural_rulebook.pdf",
			text: "Download",
			type: "download",
		},
		{
			label: "Timetable",
			route: "/timetable", // Replace with your desired route
			text: "View",
			type: "route",
		},
	]

	return (
		<div className="bg-gray-900 text-gray-300">
			<div className="mx-auto max-w-7xl px-4 pb-4 pt-12 md:px-6">
				{/* Downloads Section */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
					{downloads.map((item, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
							<h3 className="mb-1 font-semibold text-white">{item.label}</h3>
							{item.type === "download" ? (
								<DownloadButton fileUrl={item.fileUrl} fileName={item.fileName} text={item.text} />
							) : (
								<Button
									onClick={() => router.push(item.route)}
									variant="secondary"
									className="flex items-center gap-2">
									{item.text}
								</Button>
							)}
						</div>
					))}
				</div>

				<div className="my-12 flex flex-col items-center justify-between sm:mx-24 sm:flex-row sm:items-start lg:mx-32 xl:mx-36">
					<div className="flex flex-col items-center space-y-4 sm:items-start">
						<h3 className="text-lg font-semibold text-white">Address</h3>
						<p className="text-center sm:text-left">
							Manipal Institute of Technology
							<br />
							Manipal Academy of Higher Education (MAHE)
							<br />
							Manipal, Karnataka 576104
						</p>

						{/* <div className="static mb-12 flex w-full justify-center sm:mt-0 sm:hidden sm:w-fit">
							<Button
								onClick={() => window.open("https://map.revelsmit.in")}
								variant="secondary"
								className="flex max-w-96 items-center gap-2 sm:max-w-24">
								Explore MIT
							</Button>
						</div> */}
					</div>

					<div className="mt-8 sm:mt-0">
						<Socials />
						<div className="p-5">
							<div className="mt-8 flex w-full justify-center sm:mt-0 sm:w-fit">
								<Button
									onClick={() => router.push("/team")}
									variant="secondary"
									className="flex max-w-96 items-center gap-2 sm:max-w-24">
									Team
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
