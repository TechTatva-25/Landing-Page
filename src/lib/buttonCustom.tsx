"use client"

import React from "react"

interface ButtonCustomProps {
	buttonContent?: string
	link?: string
	className?: string
}

const ButtonCustom = ({
	buttonContent = "Button",
	link = "",
	className = "",
}: ButtonCustomProps): React.JSX.Element => {
	return (
		<a href={link} target="_blank" className={`flex h-full w-full items-center justify-center ${className}`}>
			<button className="w-auto min-w-32 rounded-lg bg-[#6366f1] px-2 py-2 text-white">{buttonContent}</button>
		</a>
	)
}

export default ButtonCustom
