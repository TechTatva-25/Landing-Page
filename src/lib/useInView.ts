import { useEffect, useRef, useState } from 'react'

export const useInView = (options = {}) => {
	const [isInView, setIsInView] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true)
				}
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
				...options,
			}
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [options])

	return { ref, isInView }
}
