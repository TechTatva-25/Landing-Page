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
			const maxLife = 250 + Math.random() * 400 // Slightly longer life for better visibility
			return {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.6, // Slightly more movement
				vy: (Math.random() - 0.5) * 0.6,
				size: Math.random() * 2.5 + 0.8, // Slightly larger particles
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
			// Simplified drawing with reduced complexity
			ctx.save()
			ctx.globalAlpha = particle.opacity

			// Single simplified gradient instead of multiple layers
			const gradient = ctx.createRadialGradient(
				particle.x,
				particle.y,
				0,
				particle.x,
				particle.y,
				particle.size * 4
			)

			gradient.addColorStop(0, `rgba(255, 255, 255, 0.8)`)
			gradient.addColorStop(0.5, `rgba(255, 215, 0, 0.4)`)
			gradient.addColorStop(1, `rgba(218, 165, 32, 0)`)

			// Draw single particle
			ctx.beginPath()
			ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
			ctx.fillStyle = gradient
			ctx.fill()

			ctx.restore()
		}

		let lastTime = 0
		const targetFPS = 30 // Reduced from 60fps for better performance
		const frameInterval = 1000 / targetFPS

		const animate = (currentTime: number): void => {
			if (currentTime - lastTime < frameInterval) {
				animationFrameRef.current = requestAnimationFrame(animate)
				return
			}
			lastTime = currentTime

			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Increased particle creation frequency for better visual effect
			if (Math.random() < 0.008 && particles.current.length < 12) {
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

		// Create initial particles - increased count
		for (let i = 0; i < 6; i++) {
			particles.current.push(createParticle())
		}

		animate(0)




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
