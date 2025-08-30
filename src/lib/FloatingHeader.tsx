"use client"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { config } from "@fortawesome/fontawesome-svg-core"
import { useRouter, usePathname } from "next/navigation"
import React, { useEffect } from "react"

// Prevent Font Awesome from dynamically adding its CSS
config.autoAddCss = false

const FloatingHeader = (): React.JSX.Element => {
	const router = useRouter()
	const pathname = usePathname()

	const handleNavigation = (section: string) => {
		if (pathname === "/") {
			// If we're on the homepage, just scroll to the section
			const element = document.querySelector(`#${section}`)
			if (element) {
				const headerHeight = 100
				const elementPosition = element.getBoundingClientRect().top
				const offsetPosition = elementPosition + window.pageYOffset - headerHeight

				// Use requestAnimationFrame for smoother scrolling
				requestAnimationFrame(() => {
					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					})
				})
			}
		} else {
			// If we're on a different page, navigate to homepage with the section hash
			router.push(`/#${section}`)
		}
	}

	useEffect(() => {
		// Function to handle smooth scrolling with offset for hash links
		const handleClick = (e: MouseEvent): void => {
			const target = e.target as HTMLAnchorElement
			if (target.hash && pathname === "/") {
				e.preventDefault()
				const element = document.querySelector(target.hash)
				if (element) {
					const headerHeight = 100
					const elementPosition = element.getBoundingClientRect().top
					const offsetPosition = elementPosition + window.pageYOffset - headerHeight

					// Use requestAnimationFrame for smoother scrolling
					requestAnimationFrame(() => {
						window.scrollTo({
							top: offsetPosition,
							behavior: "smooth",
						})
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
	}, [pathname])

	// Handle scrolling to section when coming from another page with hash
	useEffect(() => {
		if (pathname === "/" && window.location.hash) {
			const hash = window.location.hash.substring(1)
			setTimeout(() => {
				const element = document.getElementById(hash)
				if (element) {
					const headerHeight = 100
					const elementPosition = element.getBoundingClientRect().top
					const offsetPosition = elementPosition + window.pageYOffset - headerHeight

					window.scrollTo({
						top: offsetPosition,
						behavior: "smooth",
					})
				}
			}, 100) // Small delay to ensure page is loaded
		}
	}, [pathname])

	return (
		<div className="fixed left-1/2 z-50 mt-2 sm:mt-4 flex w-[calc(100%-2rem)] sm:w-auto -translate-x-1/2 items-center justify-center">
			<nav className="royal-navbar w-full sm:w-auto">
				<ul className="hover:shadow-royal-gold/20 flex overflow-x-auto scroll-smooth rounded-xl sm:rounded-2xl bg-gradient-to-r from-black/90 via-gray-900/95 to-black/90 px-3 sm:px-4 lg:px-8 py-2 sm:py-2 text-white shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-500 scrollbar-hide">
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
							onClick={() => handleNavigation("home")}>
							Home
						</a>
					</li>
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
							onClick={() => handleNavigation("passes")}>
							Passes
						</a>
					</li>
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
							onClick={() => handleNavigation("events")}>
							Events
						</a>
					</li>
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
							onClick={() => handleNavigation("gallery")}>
							Gallery
						</a>
					</li>
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
							onClick={() => {
								router.push("/conclave")
							}}>
							Conclave
						</a>
					</li>
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0 hidden md:flex">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
							onClick={() => {
								window.open("https://map.revelsmit.in")
							}}>
							Explore MIT
						</a>
					</li>
					<li className="mx-1.5 sm:mx-2 lg:mx-4 my-1 sm:my-2 text-xs sm:text-sm lg:text-base flex-shrink-0 flex md:hidden">
						<a
							className="heading-font hover:text-royal-gold cursor-pointer font-medium transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.6)] active:scale-95 whitespace-nowrap"
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
