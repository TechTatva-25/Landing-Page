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
		<div className="fixed left-1/2 z-50 mt-4 flex -translate-x-1/2 items-center justify-center rounded">
			<ul className="flex overflow-x-auto scroll-smooth rounded-2xl bg-[#1e1e1e] bg-opacity-60 px-3 text-white shadow-lg backdrop-blur-md backdrop-filter transition-all duration-300 hover:bg-opacity-70 sm:px-8">
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer transition duration-150 ease-in hover:text-blue-600" href="#home">
						Home
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer transition duration-150 ease-in hover:text-blue-600" href="#passes">
						Passes
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer transition duration-150 ease-in hover:text-blue-600" href="#events">
						Events
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a className="cursor-pointer transition duration-150 ease-in hover:text-blue-600" href="#gallery">
						Gallery
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base">
					<a
						className="cursor-pointer transition duration-150 ease-in hover:text-blue-600"
						onClick={() => {
							router.push("/proshow")
						}}>
						Proshow
					</a>
				</li>
				<li className="mx-2 my-2 hidden text-xs sm:mx-4 sm:text-base xl:flex">
					<a
						className="cursor-pointer transition duration-150 ease-in hover:text-blue-600"
						onClick={() => {
							window.open("https://map.revelsmit.in")
						}}>
						Explore MIT
					</a>
				</li>
				<li className="mx-2 my-2 text-xs sm:mx-4 sm:text-base xl:hidden">
					<a
						className="cursor-pointer transition duration-150 ease-in hover:text-blue-600"
						onClick={() => {
							window.open("https://map.revelsmit.in")
						}}>
						Map
					</a>
				</li>
			</ul>
		</div>
	)
}

export default FloatingHeader
