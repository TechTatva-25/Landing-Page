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
				width={300} // The intrinsic width of the image
				height={200} // The intrinsic height of the image
				loading="lazy"
				quality={80}
				placeholder="blur"
				blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
				style={{ 
					width: '100%', 
					height: 'auto' 
				}}
			/>
		</div>
	)
}

export default ImageCard
