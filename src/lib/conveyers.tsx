"use client"

// import React, { useState } from "react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import styles from "@/styles/passes.module.css"
import tanishqImg from "@/images/Tanishq.jpeg"
import lakshyaImg from "@/images/lakshya.jpeg"
import prasannaImg from "@/images/prasanna.jpg"
import shubhamImg from "@/images/shubham.jpg"
import ahmadImg from "@/images/ahmad.jpeg"
import pulkitImg from "@/images/Pulkit.jpeg"
import dillonImg from "@/images/dillon.jpg"
import palakImg from "@/images/palak.jpg"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import FloatingHeader from "./FloatingHeader"




// --- TEAM DATA ---
const technicalCC = [
	{
		name: "Tanishq Kochar",
		image: tanishqImg,
		instagram: "https://instagram.com/tanishqkochar/",
		linkedin: "https://linkedin.com/in/tanishq-kochar",
	},
	{
		name: "Lakshya Jain",
		image: lakshyaImg,
		instagram: "https://www.instagram.com/lakshyajain428/",
		linkedin: "https://www.linkedin.com/in/lakshya-jain-490ab9211/",
	},
	{
		name: "Prasanna Bhat",
		image: prasannaImg,
		instagram: "https://instagram.com/prasanna.bhatt_",
		linkedin: "https://www.linkedin.com/in/prasanna-bhat-b259ba285/",
	},
	{
		name: "Shubham Panda",
		image: shubhamImg,
		instagram: "https://www.instagram.com/suvm._/",
		linkedin: "https://www.linkedin.com/in/shubham-panda-699538258/",
	},
	{
		name: "Ahmed Sahigara",
		image: ahmadImg,
		instagram: "https://www.instagram.com/ahmdzy.s",
		linkedin: "https://www.linkedin.com/in/ahmed-sahigara",
	},
	{
		name: "Pulkit Kumar",
		image: pulkitImg,
		instagram: "https://instagram.com/desihippe",
		linkedin: "https://linkedin.com/in/buddywhitman",
	},
];

const Conveners = [
	{
		name: "Dillon Almeida",
		image: dillonImg,
		instagram: "https://www.instagram.com/dillon92345/",
		linkedin: "https://www.linkedin.com/in/dillon-almeida-b57987310/",
	},
	{
		name: "Palak Agarwal",
		image: palakImg,
		instagram: "https://www.instagram.com/palakk0905/",
		linkedin: "https://www.linkedin.com/in/palakagarwal09/",
	},
];



const sectionOrder = [
	{ title: "Conveners", members: Conveners },
	{ title: "Developers", members: technicalCC },
];

const ContactGrid = (): React.JSX.Element => {
	return (
		<div className="min-h-screen w-full" style={{background: 'linear-gradient(135deg, #E8E6D8 0%, #D8D4C8 25%, #C8C4B8 50%, #B8B4A8 75%, #A8A498 100%)'}}>
			<FloatingHeader />
			<div className="mx-auto pt-28 pb-8 max-w-7xl px-4 md:px-6">
				<div className="mb-12 flex items-center justify-center">
					<span className={`${styles.passesHeading} heading-font`} style={{fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)'}}>Meet the Team</span>
				</div>
				{sectionOrder.map((section) => (
					<div key={section.title} className="mb-16">
						<div className="mb-8 flex items-center justify-center">
							<span className={`${styles.passesHeading} heading-font`} style={{fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)'}}>{section.title}</span>
						</div>
						<div className={`grid gap-6 place-items-center ${section.members.length === 1 ? "grid-cols-1" : section.members.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
							{section.members.map((member) => (
								<Card key={member.name} className={`${styles.royalPassCard} flex flex-col items-center justify-between`}>
									<CardHeader className="pb-2 pt-6 w-full flex flex-col items-center">
										<CardTitle className="heading-font text-2xl sm:text-3xl font-bold text-center mb-2" style={{color: '#f1d38a', textShadow: '0 2px 8px #000, 0 1px 0 #000', background: 'none', WebkitBackgroundClip: 'initial', fontFamily: 'var(--font-cinzel-decorative), serif'}}>{member.name}</CardTitle>
									</CardHeader>
									<CardContent className="pb-2 w-full flex flex-col items-center">
										<div className="relative w-24 sm:w-28 h-24 sm:h-28 overflow-hidden rounded-full flex items-center justify-center bg-gray-200" style={{aspectRatio: '1/1'}}>
											<Image
												src={member.image}
												alt={member.name}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
												className="object-cover transition-transform duration-500 group-hover:scale-110"
												placeholder="blur"
												blurDataURL="data:image/svg+xml,%3Csvg width='128' height='128' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='128' height='128' fill='%23e0e7ff'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%236b7280'%3EPhoto%3C/text%3E%3C/svg%3E"
											/>
										</div>
									</CardContent>
									<CardFooter className="pt-2 w-full flex justify-center gap-4">
										{member.instagram && (
											<a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#704214] text-[#704214] bg-[#F5F5DC] hover:bg-[#FFFACD] transition-colors duration-200" aria-label="Instagram" style={{aspectRatio: '1/1'}}>
												<FontAwesomeIcon icon={faInstagram} className="w-5 h-5 font-bold" />
											</a>
										)}
										{member.linkedin && (
											<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#704214] text-[#704214] bg-[#F5F5DC] hover:bg-[#FFFACD] transition-colors duration-200" aria-label="LinkedIn" style={{aspectRatio: '1/1'}}>
												<FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 font-bold" />
											</a>
										)}
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContactGrid;
