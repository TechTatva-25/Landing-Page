"use client"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { config } from "@fortawesome/fontawesome-svg-core"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

// import logo from "../images/mitlogo.png"
// import Image from "next/image"

// Prevent Font Awesome from dynamically adding its CSS
config.autoAddCss = false

const FloatingHeader = (): React.JSX.Element => {
	const router = useRouter()

	useEffect(() => {
		// Function to handle smooth scrolling with offset
		const handleClick = (e: MouseEvent): void => {
			const target = e.target as HTMLAnchorElement
			if (target.hash) {
				e.preventDefault()
				const element = document.querySelector(target.hash)
				if (element) {
					const headerHeight = 100 // Adjust this value based on your header height
					const elementPosition = element.getBoundingClientRect().top
					const offsetPosition = elementPosition + window.pageYOffset - headerHeight

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					})
				}
			}
		}

		// Add click handlers to all navigation links
		const links = document.querySelectorAll('a[href^="#"]')
		links.forEach((link) => {
			link.addEventListener("click", handleClick as EventListener)
		})

		// Cleanup
		return (): void => {
			links.forEach((link) => {
				link.removeEventListener("click", handleClick as EventListener)
			})
		}
	}, [])

	return (
		<div className="fixed left-1/2 z-50 mt-4 flex -translate-x-1/2 items-center justify-center">
			<nav className="royal-navbar">
				<ul className="flex overflow-x-auto scroll-smooth rounded-2xl bg-gradient-to-r from-black/90 via-gray-900/95 to-black/90 backdrop-blur-xl px-4 sm:px-8 py-2 text-white shadow-2xl shadow-black/50 transition-all duration-500 hover:shadow-royal-gold/20">
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95" href="#home">
						Home
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95" href="#passes">
						Passes
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95" href="#events">
						Events
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95" href="#gallery">
						Gallery
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a
						className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95"
						onClick={() => {
							router.push("/proshow")
						}}>
						Proshow
					</a>
				</li>
				<li className="mx-2 my-2 hidden text-xs sm:mx-4 sm:text-base xl:flex">
					<a
						className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95"
						onClick={() => {
							window.open("https://map.revelsmit.in")
						}}>
						Explore MIT
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base xl:hidden">
					<a
						className="cursor-pointer heading-font font-medium transition-all duration-300 ease-out hover:text-royal-gold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95"
						onClick={() => {
							window.open("https://map.revelsmit.in")
						}}>
						Map
					</a>
				</li>
			</ul>
			</nav>
		</div>
	)
}

export default FloatingHeader
