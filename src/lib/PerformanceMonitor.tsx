"use client"

import { useEffect } from 'react'

export const PerformanceMonitor = () => {
	useEffect(() => {
		// Only run in production and in browsers that support Performance API
		if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
			return
		}

		// Monitor Core Web Vitals
		const observer = new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				if (entry.entryType === 'largest-contentful-paint') {
					console.log('LCP:', entry.startTime)
				}
				if (entry.entryType === 'first-input') {
					const fidEntry = entry as any // Type assertion for first-input entries
					console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
				}
				if (entry.entryType === 'layout-shift') {
					const clsEntry = entry as any // Type assertion for layout-shift entries
					console.log('CLS:', clsEntry.value)
				}
			}
		})

		// Observe Core Web Vitals
		try {
			observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
		} catch (e) {
			// Fallback for browsers that don't support all entry types
			console.warn('Performance monitoring not fully supported')
		}

		// Monitor long tasks
		const longTaskObserver = new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				console.warn('Long task detected:', entry.duration + 'ms')
			}
		})

		try {
			longTaskObserver.observe({ entryTypes: ['longtask'] })
		} catch (e) {
			console.warn('Long task monitoring not supported')
		}

		// Memory usage monitoring (if available)
		if ('memory' in performance) {
			const checkMemory = () => {
				const memory = (performance as any).memory
				if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
					console.warn('High memory usage detected')
				}
			}
			
			const memoryInterval = setInterval(checkMemory, 30000) // Check every 30 seconds
			
			return () => {
				clearInterval(memoryInterval)
				observer.disconnect()
				longTaskObserver.disconnect()
			}
		}

		return () => {
			observer.disconnect()
			longTaskObserver.disconnect()
		}
	}, [])

	return null // This component doesn't render anything
}

export default PerformanceMonitor
