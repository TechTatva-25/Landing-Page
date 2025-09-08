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
		<div className="px-4 py-8" id="faq" ref={ref}>
			<div className="mb-12 flex items-center justify-center">
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
