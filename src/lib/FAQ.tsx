"use client"
import React from "react"

import Accordian from "./Accordian"
import data from "./data"

const FAQ = (): React.JSX.Element => {
	return (
		<div className="container mb-24 mt-8 py-16 dark-bg">
			<div className="m-5 flex items-center">
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-white to-royal-gold opacity-30"></hr>
				<span className="mx-8 section-heading royal-gold heading-font">FAQ</span>
				<hr className="h-[2px] flex-grow border-0 bg-gradient-to-r from-royal-gold to-white opacity-30"></hr>
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
