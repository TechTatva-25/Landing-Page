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
			<div className="gothic-accordion mt-4 w-[75vw] lg:w-[75vw]">
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="gothic-accordion-header flex w-full cursor-pointer items-center justify-between px-4 py-3 text-xl font-semibold transition-all duration-300">
					<span className="faq-question">{title}</span>
					<ChevronDown
						className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-royal-gold`}
					/>
				</div>
				<div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
					<div className="gothic-accordion-content w-full p-4 text-left">
						<span className="faq-answer">{content}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordion
