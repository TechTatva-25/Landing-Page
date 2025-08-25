import { Metadata } from "next"

export function getMetadata(title: string): Metadata {
	return {
		title,
		description: "MIT Manipal's National level Annual Sports and Cultural Fest",
		openGraph: {
			title,
			description: "MIT Manipal's National level Annual Sports and Cultural Fest",
			url: "https://revelsmit.in/",
			siteName: "TechTatva 25",
			images: [
				{
					url: "https://revelsmit.in/favicon.png",
					width: 1733,
					height: 1733,
					alt: "TechTatva 25",
				},
			],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: "MIT Manipal's National level Annual Sports and Cultural Fest",
			creator: "MIT Manipal",
			images: "https://revelsmit.in/favicon.png",
		},
	}
}

export const formatDate = (input: string): string => {
	return new Date(new Date(input).getTime() + (5 * 60 + 30) * 60000)
		.toLocaleString("en-GB", {
			weekday: undefined,
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: undefined,
		})
		.replace(",", "")
		.replace("/", "-")
		.replace("/", "-")
}
