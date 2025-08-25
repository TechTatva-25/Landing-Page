import { CalendarDays, Download } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"

interface DownloadButtonProps {
	fileUrl: string
	fileName?: string
	text?: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName, text }) => {
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
		<Button
			onClick={handleDownload}
			variant="secondary"
			className="flex max-w-[200px] items-center gap-2 sm:max-w-24 md:max-w-32">
			{text === "Download" ? <Download size={16} /> : <CalendarDays size={16} />}
			{text ?? "Download"}
		</Button>
	)
}

export default DownloadButton
