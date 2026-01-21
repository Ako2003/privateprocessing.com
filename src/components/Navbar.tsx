"use client"

import Link from "next/link";
import Image from "next/image";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const menu = [
    {title: "Platform", url: "#platform"},
    {title: "Solutions", url: "#solutions"},
    {title: "Resources", url: "#resources"},
    {title: "Leadership", url: "#leadership"},
    {title: "Contact", url: "#contact"},
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="relative">
            <div className="fixed w-full py-4 bg-black/60 lg:backdrop-blur-[4px] backdrop-blur-[8px] z-100 border-b border-[#191919]">
                <div className="flex items-center justify-between max-w-[1200px] mx-auto w-11/12">
                    <div className="flex items-center">
                        <div>
                            <Link href="/">
                                <Image src="/svg/logo.svg" alt={"Private Processing Logo"} width={153} height={48} className="max-lg:scale-90"/>
                            </Link>
                            {/*<Link href="/" className="lg:hidden">*/}
                            {/*    <Image src="/svg/logo-small.svg" alt={"Private Processing Logo"} width={48.31} height={48}/>*/}
                            {/*</Link>*/}
                        </div>

                    </div>
                    <div className="flex gap-x-15 max-lg:hidden -translate-x-10">
                        {menu.map((item, index) => (
                            <div key={index}>
                                <Link href={item.url} className="font-normal font-inter text-sm capitalize tracking-[-0.38px]">{item.title}</Link>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center gap-x-5 max-lg:hidden'>
                        <button
                            className='text-black font-semibold font-inter text-sm px-5 py-3 rounded-full cursor-pointer'
                            onClick={() => window.location.href = "https://app.privateprocessing.com/signup"} style={{
                            background: "linear-gradient(298.86deg, rgba(173, 141, 85, 0.9) 7.31%, #D2AD75 33.41%, #E8CDA0 54.2%, #D2AD75 89%, rgba(173, 141, 85, 0.9) 107.85%)",
                            filter: "drop-shadow(0px 2px 5.8px rgba(187, 165, 129, 0.29))",
                        }}>
                            Log In
                        </button>
                        <button
                            className='font-semibold font-inter text-sm px-5 py-3 rounded-full cursor-pointer border border-white/18'
                            onClick={() => window.location.href = "https://app.privateprocessing.com/login"} style={{
                            background: " linear-gradient(180deg, rgba(161, 166, 191, 0.7) -64.13%, rgba(161, 166, 191, 0) 136.96%)",
                        }}>
                            Sign Up
                        </button>
                    </div>

                    <div className="lg:hidden transition-all duration-500 z-100">
                        {isOpen ? (
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(false)}>
                                <path d="M14 1.415L12.585 0L7 5.585L1.415 0L0 1.415L5.585 7L0 12.585L1.415 14L7 8.415L12.585 14L14 12.585L8.415 7L14 1.415Z" fill="url(#paint0_linear_173_123)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_173_123" x1="7" y1="-3.05556" x2="7" y2="14" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        ) : (
                            <svg width="30" height="30" viewBox="0 0 25 25" fill="none" onClick={() => setIsOpen(true)}
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_165_49)">
                                    <path d="M3 8.54167H21.75V7H3V8.54167Z" fill="url(#paint0_linear_165_49)"/>
                                    <path d="M3 14.0833H16V12.5416H3V14.0833Z" fill="url(#paint1_linear_165_49)"/>
                                    <path d="M3 19.625H21.75V18.0834H3V19.625Z" fill="url(#paint2_linear_165_49)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_165_49" x1="12.375" y1="6.66353" x2="12.375"
                                                    y2="8.54167" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_165_49" x1="9.5" y1="12.2052" x2="9.5"
                                                    y2="14.0833" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_165_49" x1="12.375" y1="17.7469" x2="12.375"
                                                    y2="19.625" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
                                    </linearGradient>
                                    <clipPath id="clip0_165_49">
                                        <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        )}
                </div>

            </div>
        </div>
{/* Mobile Menu*/
}
{
    isOpen && (
        <div
            className="fixed translate-y-[5px] top-19 xl:hidden h-[calc(100vh)] w-full bg-black/80 backdrop-blur-[8px] z-90">
            <div className="flex flex-col justify-start h-[calc(100svh)]  space-y-3 w-11/12 mx-auto mt-5">
                {menu.map((item, index) => (
                    <div key={index} className="border-b border-white/10 pb-5 pt-1" onClick={() => setIsOpen(false)}>
                        <Link href={item.url} className="font-light text-[18px] capitalize text-[#acafb9]">{item.title}</Link>
                    </div>
                ))}
                <div className="flex mt-20 gap-y-5 flex-col">
                    <button
                        className='w-full text-black font-semibold font-inter text-sm px-5 py-3 rounded-full cursor-pointer'
                        onClick={() => window.location.href = "https://app.privateprocessing.com/signup"} style={{
                                background: "linear-gradient(298.86deg, rgba(173, 141, 85, 0.9) 7.31%, #D2AD75 33.41%, #E8CDA0 54.2%, #D2AD75 89%, rgba(173, 141, 85, 0.9) 107.85%)",
                                filter: "drop-shadow(0px 2px 5.8px rgba(187, 165, 129, 0.29))",
                            }}>
                                Log In
                    </button>
                    <button
                        className='w-full font-semibold font-inter text-sm px-5 py-3 rounded-full cursor-pointer border border-white/18'
                        onClick={() => window.location.href = "https://app.privateprocessing.com/login"} style={{
                        background: " linear-gradient(180deg, rgba(161, 166, 191, 0.7) -64.13%, rgba(161, 166, 191, 0) 136.96%)",
                    }}>
                        Sign Up
                    </button>
                    </div>
                </div>
            </div>
            )}
        </nav>
    )
}

