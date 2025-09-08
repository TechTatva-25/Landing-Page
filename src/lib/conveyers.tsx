"use client"

import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

import pulkitImg from "@/images/Pulkit.jpeg"
import tanishqImg from "@/images/Tanishq.jpeg"
import ahmadImg from "@/images/ahmad.jpeg"
import dillonImg from "@/images/dillon.jpg"
import lakshyaImg from "@/images/lakshya.jpeg"
import palakImg from "@/images/palak.jpg"
import prasannaImg from "@/images/prasanna.jpg"
import shubhamImg from "@/images/shubham.jpg"
import styles from "@/styles/passes.module.css"

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
]

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
]

const sectionOrder = [
    { title: "Conveners", members: Conveners },
    { title: "Developers", members: technicalCC },
]

const ContactGrid = (): JSX.Element => {
    return (
        <div
            className="min-h-screen w-full"
            style={{ background: "linear-gradient(135deg, #E8E6D8 0%, #D8D4C8 25%, #C8C4B8 50%, #B8B4A8 75%, #A8A498 100%)" }}>
            <FloatingHeader />
            <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 md:px-6">
                <div className="mb-12 flex items-center justify-center">
                    <span
                        className={`${styles.passesHeading} heading-font`}
                        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
                        Meet the Team
                    </span>
                </div>
                {sectionOrder.map((section) => {
                    const gridCols =
                        section.members.length === 1
                            ? "team-grid-single grid-cols-1"
                            : section.members.length === 2
                            ? "team-grid-double grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                            : "team-grid-triple grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

                    // Much smaller gap for 2 cards
                    const gapClass = section.members.length === 2 ? "gap-6 md:gap-6" : "gap-6"

                    return (
                        <div key={section.title} className="mb-16">
                            <div className="mb-8 flex items-center justify-center">
                                <span
                                    className={`${styles.passesHeading} heading-font`}
                                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}>
                                    {section.title}
                                </span>
                            </div>
                            {/* Team grid with responsive columns and dynamic gap */}
                            <div className={`team-grid grid place-items-center ${gapClass} ${gridCols}`}>
                                {section.members.map((member) => (
                                    <div
                                        key={member.name}
                                        className={`${styles.royalTeamCard} flex w-full max-w-xs flex-col items-center px-6 py-6 text-center`}>
                                        {/* Avatar */}
                                        <div className="relative mx-auto mb-8 h-28 w-28">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                placeholder="blur"
                                                blurDataURL="data:image/svg+xml,%3Csvg width='128' height='128' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='128' height='128' fill='%23e0e7ff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='22' fill='%236b7280'%3EPhoto%3C/text%3E%3C/svg%3E"
                                            />
                                        </div>
                                        
                                        {/* Name */}
                                        <h3
                                            className="heading-font mb-4 text-base font-bold transition-colors duration-300"
                                            style={{
                                                color: "#f1d38a",
                                                textShadow: "0 2px 8px #000, 0 1px 0 #000",
                                                background: "none",
                                                WebkitBackgroundClip: "initial",
                                                fontFamily: "var(--font-cinzel-decorative), serif",
                                            }}>
                                            {member.name}
                                        </h3>
                                        
                                        {/* Social Links */}
                                        <div className="flex justify-center gap-3">
                                            {member.instagram && (
                                                <a
                                                    href={member.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#704214] bg-[#F5F5DC] p-2 text-[#704214] transition-all duration-300 hover:bg-[#FFFACD]"
                                                    aria-label="Instagram">
                                                    <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 font-bold" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#704214] bg-[#F5F5DC] p-2 text-[#704214] transition-all duration-300 hover:bg-[#FFFACD]"
                                                    aria-label="LinkedIn">
                                                    <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5 font-bold" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ContactGrid
