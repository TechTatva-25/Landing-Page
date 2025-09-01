import { Metadata } from "next"

export function getMetadata(title: string): Metadata {
	const baseUrl = "https://techtatva.in"
	const description = "TechTatva 25 - MIT Manipal's premier technical festival featuring cutting-edge technology competitions, workshops, hackathons, and innovation showcases. Join thousands of students from across India for 4 days of technical excellence."
	const keywords = [
		"TechTatva",
		"MIT Manipal",
		"Technical Festival",
		"Technology Competition",
		"Hackathon",
		"Workshop",
		"Engineering",
		"Computer Science",
		"AI/ML",
		"Robotics",
		"Cybersecurity",
		"Web Development",
		"Mobile Development",
		"Data Science",
		"Blockchain",
		"Cloud Computing",
		"Tech Innovation",
		"Student Festival",
		"Manipal University",
		"Technical Events"
	].join(", ")

	return {
		title: {
			default: title,
			template: `%s | TechTatva 25 - MIT Manipal's Technical Festival`
		},
		description,
		keywords,
		authors: [{ name: "TechTatva 25 Team", url: baseUrl }],
		creator: "TechTatva 25 - MIT Manipal",
		publisher: "MIT Manipal",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL(baseUrl),
		alternates: {
			canonical: baseUrl,
		},
		openGraph: {
			type: "website",
			locale: "en_IN",
			url: baseUrl,
			siteName: "TechTatva 25",
			title,
			description,
			images: [
				{
					url: "/images_tt/Untitled design (1).png",
					width: 1200,
					height: 630,
					alt: "TechTatva 25 - MIT Manipal's Technical Festival",
				},
				{
					url: "/android-chrome-512x512.png",
					width: 512,
					height: 512,
					alt: "TechTatva 25 Logo",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			creator: "@TechTatva25",
			site: "@TechTatva25",
			images: ["/images_tt/Untitled design (1).png"],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		verification: {
			google: "your-google-verification-code", // Add your Google Search Console verification code
			// yandex: "your-yandex-verification-code",
			// yahoo: "your-yahoo-verification-code",
		},
		category: "Technology",
		classification: "Technical Festival",
		referrer: "origin-when-cross-origin",
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
