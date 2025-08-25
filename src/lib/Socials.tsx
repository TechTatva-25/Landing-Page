import Image from "next/image"
import React from "react"

import fbIcon from "../images/fb.png"
import igIcon from "../images/insta.png"
import twitterIcon from "../images/x.png"

const Socials = (): React.JSX.Element => {
	return (
		<div className="flex flex-col items-center">
			<h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
			<ul className="flex flex-row items-center gap-5">
				<li className="group">
					<a
						href="https://instagram.com/revelsmit"
						target="_blank"
						rel="noopener noreferrer"
						className="relative block transition-opacity hover:opacity-80">
						<Image src={igIcon} alt="Instagram" width={24} height={24} className="pointer-events-auto" />
					</a>
				</li>
				<li className="group">
					<a
						href="https://facebook.com/mitrevels/"
						target="_blank"
						rel="noopener noreferrer"
						className="relative block transition-opacity hover:opacity-80">
						<Image src={fbIcon} alt="Facebook" width={24} height={24} className="pointer-events-auto" />
					</a>
				</li>
				<li className="group">
					<a
						href="https://twitter.com/revelsmit"
						target="_blank"
						rel="noopener noreferrer"
						className="relative block transition-opacity hover:opacity-80">
						<Image src={twitterIcon} alt="Twitter" width={24} height={24} className="pointer-events-auto" />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Socials
