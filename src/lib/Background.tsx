"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

import backgroundImageDesktop from "../images/desktop_new.jpg"
import logoImage from "../images/elysium_logo.png"
import backgroundImageMobile from "../images/hero_mobile_2.jpg"
// import bannerImage from "../images/proshowentry.png"
import CountdownTimer from "./CountdownTimer"
// import FullScreenBanner from "./fullscreenbanner" // Import the new component

const Background = (): JSX.Element => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [isLogoLoaded, setIsLogoLoaded] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [showPolicy, setShowPolicy] = useState<boolean>(false)
	const router = useRouter()

	useEffect((): (() => void) => {
		const handleResize = (): void => {
			setIsMobile(window.innerWidth < 500)
		}

		handleResize()
		window.addEventListener("resize", handleResize)

		return (): void => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	const handleRegisterClick = (): void => {
		setShowPolicy(true)
	}

	const handlePolicyAccept = (): void => {
		router.push("https://register.revelsmit.in/dashboard")
	}

	return (
		<div className="relative w-full sm:opacity-100">
			{/* Add the FullScreenBanner component */}
			{/* <FullScreenBanner imageSrc={bannerImage} altText="Revels '25 Elysium Event Lineup" autoCloseTime={10000} /> */}

			<div className="relative h-screen w-full overflow-hidden" id="home">
				{/* Background Image */}
				<Image
					src={isMobile ? backgroundImageMobile : backgroundImageDesktop}
					alt="Background"
					fill
					priority
					className={`object-cover transition-opacity duration-1000 ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={(): void => setIsLoaded(true)}
					sizes="100vw"
					quality={90}
				/>

				{/* Black Overlay */}
				<div className="absolute inset-0 bg-black opacity-50" />

				{/* Content Container */}
				<div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
					{/* Logo Container */}
					<div className="mb-2 md:mb-4">
						<div
							className={`relative h-96 w-96 transform transition-all duration-1000 ease-out md:h-[800px] md:w-[800px] ${
								isLogoLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
							}`}>
							<Image
								src={logoImage}
								alt="Logo"
								fill
								className="object-contain"
								sizes="(max-width: 768px) 24rem, 800px"
								priority
								onLoad={(): void => setIsLogoLoaded(true)}
							/>
						</div>
					</div>

					{/* Button Container */}
					<div className="my-2 mb-24 transform transition-all duration-1000 ease-out md:mt-[-150px]">
						<Button
							className="bg-inherit-800 z-30 transform rounded-lg p-6 text-xl font-extrabold shadow-sm shadow-white transition-all duration-300 hover:scale-105 hover:bg-blue-900"
							onClick={handleRegisterClick}>
							Register Now
						</Button>
					</div>
				</div>

				{/* Components Container */}
				<div className="absolute bottom-0 left-0 right-0 z-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<CountdownTimer />
					</div>
				</div>
			</div>

			{/* Policy Dialog */}
			<Dialog open={showPolicy} onOpenChange={setShowPolicy}>
				<DialogContent className="max-w-xl">
					<DialogHeader>
						<DialogTitle className="text-blue-900">Registration Policy</DialogTitle>
						<DialogDescription className="">
							Please read our policy carefully before proceeding
						</DialogDescription>
					</DialogHeader>
					<ScrollArea className="h-[400px] w-full rounded-md border p-4">
						<div className="space-y-4">
							<h3 className="text-lg font-bold text-blue-900">Students</h3>
							<p>
								<b>MAHE:</b> Open to all MAHE students currently pursuing programs.
							</p>
							<p>
								<b>Non-MAHE:</b> Only students currently pursuing B.E. and B.Tech &#40;College ID proof
								is mandatory&#41;.
							</p>
							<h3 className="text-lg font-bold text-blue-900">Faculty & Alumni</h3>
							<p>
								Alumni and faculty must fill this{" "}
								<a className="text-blue-900 underline" href="https://forms.office.com/r/iRe8kvw1mJ">
									form
								</a>{" "}
								as the first step for Revels Proshow registration. Further steps will follow after
								submission.
							</p>

							{/* Add more policy sections as needed */}
						</div>
					</ScrollArea>
					<DialogFooter className="flex gap-2">
						<Button variant="outline" onClick={(): void => setShowPolicy(false)}>
							Cancel
						</Button>
						<Button onClick={handlePolicyAccept} className="bg-blue-900">
							Accept & Continue
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default Background
