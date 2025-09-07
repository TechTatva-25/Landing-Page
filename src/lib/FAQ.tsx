"use client"
import React from "react"

import Accordian from "./Accordian"
import data from "./data"
import { useInView } from "./useInView"
import styles from "@/styles/passes.module.css"
import stylesFaq from "@/styles/faq.module.css"

const FAQ = (): React.JSX.Element => {
	const { ref, isInView } = useInView()
	
	return (
		<div className="container mb-4 md:mb-24 mt-8 py-16" ref={ref}>
			<div className="m-5 flex items-center justify-center">
				<span className={`${styles.passesHeading} heading-font ${isInView ? 'in-view' : ''}`}>FAQ</span>
			</div>
			<div className={`${stylesFaq.faqWrapper}`}>
				<div className={stylesFaq.faqPanel}>
					<div className="space-y-4">
						{data.map((item, index) => (
							<Accordian key={index} title={item.title} content={item.content} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default FAQ
