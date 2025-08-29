"use client"
import React from "react"

import Accordian from "./Accordian"
import data from "./data"
import { useInView } from "./useInView"

const FAQ = (): React.JSX.Element => {
	const { ref, isInView } = useInView()
	
	return (
		<div className="container mb-24 mt-8 py-16" ref={ref}>
			<div className="m-5 flex items-center justify-center">
				<span className={`section-heading royal-gradient-heading heading-font ${isInView ? 'in-view' : ''}`}>FAQ</span>
			</div>
			<div className="mx-auto max-w-screen-xl flex-row items-center justify-center">
				{data.map((item, index) => {
					return <Accordian key={index} title={item.title} content={item.content}></Accordian>
				})}
			</div>
		</div>
	)
}
export default FAQ
