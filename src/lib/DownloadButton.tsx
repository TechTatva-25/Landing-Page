import { CalendarDays, Download } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"

interface DownloadButtonProps {
	fileUrl: string
	fileName?: string
	text?: string
	className?: string
	variant?: "default" | "subtle"
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName, text, className, variant = "default" }) => {
	const handleDownload = (): void => {
		const link = document.createElement("a")
		link.href = fileUrl
		link.target = "_blank"
		link.download = fileName || "download"
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<Button onClick={handleDownload} className={`${variant === "default" ? "royal-download-button" : ""} flex w-full items-center gap-2 ${className || ''}`}>
			{text === "Download" ? <Download size={16} /> : <CalendarDays size={16} />}
			{text ?? "Download"}
		</Button>
	)
}

export default DownloadButton
