"use client"
import React from "react"

import Accordian from "./Accordian"
import data from "./data"

const FAQ = (): React.JSX.Element => {
	return (
		<div className="container mb-24 mt-8 bg-black py-16">
			<div className="m-5 flex items-center">
				<hr className="to-royal-gold h-[2px] flex-grow border-0 bg-gradient-to-r from-white opacity-30"></hr>
				<span className="section-heading royal-gradient-heading heading-font mx-8">FAQ</span>
				<hr className="from-royal-gold h-[2px] flex-grow border-0 bg-gradient-to-r to-white opacity-30"></hr>
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
