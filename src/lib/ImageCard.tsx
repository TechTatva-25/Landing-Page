"use client"
import Image from "next/image"
import React from "react"

interface ImageCardProps {
	imageurl?: string
}

const ImageCard = ({ imageurl = "" }: ImageCardProps): React.JSX.Element => {
	return (
		<div className="relative mx-auto w-full max-w-sm">
			<Image
				className="rounded"
				src={imageurl}
				alt="Placeholder Image"
				layout="responsive" // Makes the image responsive
				width={300} // The intrinsic width of the image
				height={200} // The intrinsic height of the image
			/>
		</div>
	)
}

export default ImageCard
