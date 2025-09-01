"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

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

import logoImage from "../../public/images_tt/Untitled design (1).png"
import backgroundImageDesktop from "../../public/images_tt/Untitled design (2).png"
import backgroundImageMobile from "../../public/images_tt/mobile_background.png"
// import bannerImage from "../images/proshowentry.png"
import CountdownTimer from "./CountdownTimer"
import Particles from "./Particles"
// import FullScreenBanner from "./fullscreenbanner" // Import the new component

const Background = (): JSX.Element => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const [, setIsLogoLoaded] = useState<boolean>(false)

	const [showPolicy, setShowPolicy] = useState<boolean>(false)
	const [showLogo, setShowLogo] = useState<boolean>(false)
	const router = useRouter()

	const handleRegisterClick = (): void => {
		setShowPolicy(true)
	}

	const handlePolicyAccept = (): void => {
		router.push("https://register.revelsmit.in/dashboard")
	}

	return (
		<div className="relative w-full bg-black sm:opacity-100">
			{/* Add the FullScreenBanner component */}
			{/* <FullScreenBanner imageSrc={bannerImage} altText="TechTatva '25 Event Lineup" autoCloseTime={10000} /> */}

			<div className="hero-breathing-glow relative h-screen w-full overflow-hidden bg-black" id="home">
				{/* Background Image - Desktop */}
				<Image
					src={backgroundImageDesktop}
					alt="Background"
					fill
					priority
					className={`hidden sm:block object-cover transition-opacity duration-1000 ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={(): void => {
						setIsLoaded(true)
						// Start logo animation immediately after background loads
						setTimeout(() => setShowLogo(true), 200)
					}}
					sizes="100vw"
					quality={85} // Reduced for faster loading
					placeholder="blur"
					blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
				/>
				
				{/* Background Image - Mobile */}
				<Image
					src={backgroundImageMobile}
					alt="Background"
					fill
					priority
					className={`block sm:hidden object-cover transition-opacity duration-1000 ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onLoad={(): void => {
						setIsLoaded(true)
						// Start logo animation immediately after background loads
						setTimeout(() => setShowLogo(true), 200)
					}}
					sizes="100vw"
					quality={85} // Reduced for faster loading
					placeholder="blur"
					blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
				/>

				{/* Black Overlay with Subtle Blur */}
				<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

				{/* Vignette Effect with Blur Fade */}
				<div className="bg-gradient-radial-blur absolute inset-0" />

				{/* Center Glow Effect */}
				<div className="absolute inset-0 bg-gradient-radial-center-glow" />

				{/* Floating Particles */}
				<Particles />

				{/* Content Container */}
				<div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
					{/* Logo Container with Enhanced 3D Animation */}
					<div className="w-full flex justify-center">
						<motion.div
							className="relative h-80 w-80 sm:h-96 sm:w-96 md:h-[650px] md:w-[650px] will-change-transform"
							style={{ 
								transform: "translateZ(0)",
								transformStyle: "preserve-3d",
								perspective: "1000px"
							}} // Force hardware acceleration with 3D context
							initial={{
								opacity: 0,
								scale: 0.8,
								y: 50,
								rotateX: 0,
								rotateY: 0,
								rotateZ: 0,
							}}
							animate={
								showLogo
									? {
											opacity: [0, 1],
											scale: [0.8, 1.05, 0.98],
											y: [50, -5, 0],
											rotateX: [0, 2, 0],
											rotateY: [0, 3, 0],
											rotateZ: [0, 1, 0],
										}
									: {
											opacity: 0,
											scale: 0.8,
											y: 50,
											rotateX: 0,
											rotateY: 0,
											rotateZ: 0,
										}
							}
							transition={{
								duration: 2.5,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}>
							{/* Enhanced 3D Floating Animation */}
							<motion.div
								className="h-full w-full will-change-transform"
								style={{ 
									transform: "translateZ(0)",
									transformStyle: "preserve-3d"
								}} // Force hardware acceleration with 3D context
								animate={{
									y: [0, -4, 0, -2, 0],
									rotateX: [0, 1.5, 0, -1, 0, 0.5, 0],
									rotateY: [0, 2, 0, -1.5, 0, 1, 0],
									rotateZ: [0, 0.5, 0, -0.3, 0, 0.2, 0],
									scale: [1, 1.002, 1, 1.001, 1],
								}}
								transition={{
									duration: 12, // Smooth, slow movement
									repeat: Infinity,
									ease: "easeInOut",
									repeatType: "reverse",
									times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
									delay: 3, // Start after the initial pop animation
								}}>
								<Image
									src={logoImage}
									alt="Logo"
									fill
									className="object-contain drop-shadow-gothic-subtle"
									sizes="(max-width: 768px) 24rem, 800px"
									priority
									quality={90}
									placeholder="blur"
									blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
									onLoad={(): void => setIsLogoLoaded(true)}
								/>
							</motion.div>
						</motion.div>
					</div>

					{/* Button Container */}
					<div className="mb-16 mt-4 transform transition-all duration-1000 ease-out">
						<motion.div
							initial={{
								opacity: 0,
								y: 30,
								scale: 0.9,
							}}
							animate={
								showLogo
									? {
											opacity: 1,
											y: 0,
											scale: 1,
										}
									: {
											opacity: 0,
											y: 30,
											scale: 0.9,
										}
							}
							transition={{
								delay: 2.5,
								duration: 1.2,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}>
							<Button
								className="glassmorphic-button heading-font hover:from-royal-gold/30 hover:shadow-royal-gold/40 hover:text-royal-gold z-30 transform rounded-2xl bg-gradient-to-br from-black/90 to-gray-900/90 px-12 py-6 text-xl font-bold text-white shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:to-yellow-600/20"
								onClick={handleRegisterClick}>
								Register Now
							</Button>
						</motion.div>
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
								as the first step for Revels Conclave registration. Further steps will follow after
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
