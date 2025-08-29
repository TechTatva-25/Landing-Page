"use client"

import { useEffect, useRef } from "react"

interface Particle {
	x: number
	y: number
	vx: number
	vy: number
	size: number
	opacity: number
	life: number
	maxLife: number
}

export default function Particles(): JSX.Element {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particles = useRef<Particle[]>([])
	const animationFrameRef = useRef<number>()

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext("2d")
		if (!ctx) return

		const resizeCanvas = (): void => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		const createParticle = (): Particle => {
			const maxLife = 200 + Math.random() * 300
			return {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.5,
				vy: (Math.random() - 0.5) * 0.5,
				size: Math.random() * 2 + 0.5,
				opacity: 0,
				life: 0,
				maxLife,
			}
		}

		const updateParticle = (particle: Particle): void => {
			particle.x += particle.vx
			particle.y += particle.vy
			particle.life++

			// Fade in and out
			const lifeFraction = particle.life / particle.maxLife
			if (lifeFraction < 0.15) {
				particle.opacity = lifeFraction * 6.67
			} else if (lifeFraction > 0.85) {
				particle.opacity = (1 - lifeFraction) * 6.67
			} else {
				particle.opacity = 0.4 + Math.sin(particle.life * 0.03) * 0.2
			}

			// Wrap around edges
			if (particle.x < 0) particle.x = canvas.width
			if (particle.x > canvas.width) particle.x = 0
			if (particle.y < 0) particle.y = canvas.height
			if (particle.y > canvas.height) particle.y = 0
		}

		const drawParticle = (particle: Particle): void => {
			// Apply reduced blur effect
			ctx.filter = "blur(0.8px)"

			// Create outer golden glow
			const outerGradient = ctx.createRadialGradient(
				particle.x,
				particle.y,
				0,
				particle.x,
				particle.y,
				particle.size * 8
			)

			outerGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.6})`)
			outerGradient.addColorStop(0.2, `rgba(255, 255, 255, ${particle.opacity * 0.4})`)
			outerGradient.addColorStop(0.4, `rgba(255, 215, 0, ${particle.opacity * 0.3})`)
			outerGradient.addColorStop(0.6, `rgba(218, 165, 32, ${particle.opacity * 0.2})`)
			outerGradient.addColorStop(0.8, `rgba(218, 165, 32, ${particle.opacity * 0.1})`)
			outerGradient.addColorStop(1, `rgba(218, 165, 32, 0)`)

			// Draw outer glow
			ctx.beginPath()
			ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2)
			ctx.fillStyle = outerGradient
			ctx.fill()

			// Create inner white core with golden transition
			const innerGradient = ctx.createRadialGradient(
				particle.x,
				particle.y,
				0,
				particle.x,
				particle.y,
				particle.size * 3
			)

			innerGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.8})`)
			innerGradient.addColorStop(0.3, `rgba(255, 255, 255, ${particle.opacity * 0.6})`)
			innerGradient.addColorStop(0.6, `rgba(255, 215, 0, ${particle.opacity * 0.4})`)
			innerGradient.addColorStop(1, `rgba(218, 165, 32, ${particle.opacity * 0.2})`)

			// Draw inner core
			ctx.beginPath()
			ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
			ctx.fillStyle = innerGradient
			ctx.fill()

			// Reset filter
			ctx.filter = "none"
		}

		const animate = (): void => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Add new particles occasionally
			if (Math.random() < 0.01 && particles.current.length < 15) {
				particles.current.push(createParticle())
			}

			// Update and draw particles
			particles.current = particles.current.filter((particle) => {
				updateParticle(particle)
				drawParticle(particle)
				return particle.life < particle.maxLife
			})

			animationFrameRef.current = requestAnimationFrame(animate)
		}

		// Initialize
		resizeCanvas()
		window.addEventListener("resize", resizeCanvas)

		// Create initial particles
		for (let i = 0; i < 8; i++) {
			particles.current.push(createParticle())
		}

		animate()

		return (): void => {
			window.removeEventListener("resize", resizeCanvas)
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current)
			}
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="z-5 pointer-events-none absolute inset-0"
			style={{
				background: "transparent",
				mixBlendMode: "screen",
			}}
		/>
	)
}
