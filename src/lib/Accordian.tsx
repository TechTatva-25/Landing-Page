import { ChevronDown } from "lucide-react"
import React, { useState } from "react"

interface AccordionProps {
	title?: string
	content?: string
}

const Accordion = ({
	title = "placeholder title",
	content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure fuga? Laboriosam, et iusto ipsum modi deleniti, aliquam labore culpa dolores nisi hic quis odio consequuntur placeat. Quia, ullam a!",
}: AccordionProps): React.JSX.Element => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="flex justify-center">
			<div className="mt-4 w-[75vw] rounded-lg bg-white shadow-md lg:w-[75vw]">
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="flex w-full cursor-pointer items-center justify-between border-b px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-gray-100">
					<span>{title}</span>
					<ChevronDown
						className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					/>
				</div>
				<div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96" : "max-h-0"}`}>
					<div className="w-full p-4 text-left text-gray-600">
						<span>{content}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
