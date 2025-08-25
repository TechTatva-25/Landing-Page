"use client"

import { Home } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import { useRouter } from "next/navigation"
import { type FC } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import igIcon from "../images/insta.png"
import dhvani from "../images/lineup/dhvani.jpg"
import gurleen from "../images/lineup/gurleen.jpg"
import mithoon from "../images/lineup/mithoon.png"
import raftaar from "../images/lineup/raftaar.png"
import shreyja from "../images/lineup/shreyja.png"

interface ArtistCard {
	id: number
	path: StaticImageData | string
	title: string
	InstagramLink: string
}

const LineUp: FC = () => {
	const router = useRouter()

	const cards: ArtistCard[] = [
		{
			id: 1,
			path: shreyja,
			title: "Shreyja Mhatre",
			InstagramLink: "https://www.instagram.com/shreyja.mhatre_official/",
		},
		{
			id: 2,
			path: gurleen,
			title: "Gurleen Pannu",
			InstagramLink: "https://www.instagram.com/gurleen_pannu/",
		},
		{
			id: 3,
			path: dhvani,
			title: "Dhvani Bhanushali",
			InstagramLink: "https://www.instagram.com/dhvanibhanushali22/",
		},
		{
			id: 4,
			path: mithoon,
			title: "Mithoon",
			InstagramLink: "https://www.instagram.com/mithoon11/",
		},
		{
			id: 5,
			path: raftaar,
			title: "Raftaar",
			InstagramLink: "https://www.instagram.com/raftaarmusic/",
		},
	]

	return (
		<>
			<div className="mt-8 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
				<span className="mx-8 text-3xl font-bold text-blue-900">Proshow</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
			</div>
			<div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
				{cards.map((card) => (
					<Card
						key={card.id}
						className="overflow-hidden bg-white text-blue-900 shadow-md shadow-blue-800 transition-transform duration-200">
						<CardHeader>
							<CardTitle className="text-xl font-bold">{card.title}</CardTitle>
						</CardHeader>

						<CardContent>
							<div className="relative aspect-[2/3] w-full overflow-hidden rounded-md">
								<Image
									src={card.path}
									alt={`${card.title} - Artist`}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover"
									priority={card.id <= 2}
								/>
							</div>
						</CardContent>

						<CardFooter>
							<a
								href={card.InstagramLink}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full"
								aria-label={`Visit ${card.title}'s Instagram profile`}>
								<Button className="flex w-full items-center justify-center gap-2 bg-blue-900 text-white hover:bg-blue-800">
									<Image
										src={igIcon}
										alt=""
										width={24}
										height={24}
										className="h-6 w-6"
										aria-hidden="true"
									/>
									<span>Instagram</span>
								</Button>
							</a>
						</CardFooter>
					</Card>
				))}
			</div>
			<div className="mb-8 mt-2 flex w-full justify-center">
				<hr className="mt-4 h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-blue-900" />
				<button
					onClick={() => router.push("/")}
					className="mx-6 flex w-full max-w-96 items-center justify-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-white transition-colors hover:bg-blue-700">
					<Home className="h-5 w-5" />
					<span>Back to Home</span>
				</button>
				<hr className="mt-4 h-[2px] flex-grow border-0 bg-gradient-to-r from-blue-900 to-white" />
			</div>
		</>
	)
}

export default LineUp
