"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

interface BannerProps {
	imageSrc: string
	altText?: string
	autoCloseTime?: number
}

const FullScreenBanner = ({
	imageSrc,
	altText = "Promotional Banner",
	autoCloseTime = 10000,
}: BannerProps): JSX.Element | null => {
	const [showBanner, setShowBanner] = useState<boolean>(true)
	const [imageLoaded, setImageLoaded] = useState<boolean>(false)
	const [showDiv, setShowDiv] = useState<boolean>(true)

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent): void => {
			if (e.key === "Escape") {
				setShowDiv(false)
			}
		}

		document.addEventListener("keydown", handleEscape)

		return (): void => {
			document.removeEventListener("keydown", handleEscape)
		}
	}, [])

	useEffect(() => {
		// Set timer to automatically close the banner
		const timer = setTimeout(() => {
			setShowBanner(false)
		}, autoCloseTime)

		const timer2 = setTimeout(() => {
			setShowDiv(false)
		}, autoCloseTime + 300)

		// Clear the timer if component unmounts
		return (): void => {
			clearTimeout(timer)
			clearTimeout(timer2)
		}
	}, [autoCloseTime])

	const bannerClass = showBanner
		? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 opacity-100"
		: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 opacity-0"

	if (!showDiv) return null

	return (
		<div
			className={bannerClass}
			onClick={() => {
				setShowDiv(false)
			}}>
			<div className="relative max-h-[90vh] max-w-[90vw]">
				<Button
					variant="outline"
					size="icon"
					className={`absolute -right-4 -top-4 z-10 rounded-full bg-white text-black shadow-md hover:bg-white ${imageLoaded ? "opacity-100" : "opacity-0"}`}
					onClick={(): void => setShowDiv(false)}>
					<X className="h-4 w-4" />
				</Button>

				<div
					className={`relative transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
					<Image
						src={imageSrc}
						alt={altText}
						priority
						className="h-auto max-h-[90vh] w-auto rounded-md object-contain shadow-lg"
						width={1000}
						height={1000}
						onLoad={(): void => setImageLoaded(true)}
						onClick={(e) => {
							e.stopPropagation()
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default FullScreenBanner
