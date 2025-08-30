import { useEffect, useRef, useState, useCallback } from 'react'

export const useInView = (options = {}) => {
	const [isInView, setIsInView] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const observerRef = useRef<IntersectionObserver | null>(null)

	// Memoize the callback to prevent unnecessary re-renders
	const handleIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
		if (entry.isIntersecting && !isInView) {
			setIsInView(true)
			// Disconnect observer after first intersection to improve performance
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [isInView])

	useEffect(() => {
		const element = ref.current
		if (!element) return

		// Create observer with optimized settings
		observerRef.current = new IntersectionObserver(handleIntersect, {
			threshold: 0.05, // Reduced threshold for earlier triggering
			rootMargin: '0px 0px -20px 0px', // Reduced margin for better performance
			...options,
		})

		observerRef.current.observe(element)

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [handleIntersect, options])

	return { ref, isInView }
}
