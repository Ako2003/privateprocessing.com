"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const menu = [
    {title: "Platform", url: "#private-processing-solution"},
    {title: "Solutions", url: "#shared-values"},
    {title: "Leadership", url: "#mission"},
    {title: "Resources", url: "#awards"},
    {title: "Contact", url: "#awards"},
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="relative">
            <div className="fixed w-full py-4 bg-black/60 lg:backdrop-blur-[4px] backdrop-blur-[8px] z-100">
                <div className="flex items-center justify-between max-w-[1200px] mx-auto w-11/12">
                    <div className="flex gap-x-30 items-center">
                        <div>
                            <Link href="/" className="max-lg:hidden">
                                <Image src="/svg/logo.svg" alt={"Private Processing Logo"} width={153} height={48}/>
                            </Link>
                            <Link href="/" className="xl:hidden">
                                <Image src="/svg/logo-small.svg" alt={"Private Processing Logo"} width={48.31} height={48}/>
                            </Link>
                        </div>

                        <div className="flex gap-x-15 max-lg:hidden">
                            {menu.map((item, index) => (
                                <div key={index}>
                                    <Link href={item.url} className="font-medium font-inter text-sm capitalize">{item.title}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-x-5'>
                        {/*<Link href="https://app.privateprocessing.com" target="_blank" className="font-medium text-sm">Sign In</Link>*/}
                        {/*<CustomButton className="max-xl:hidden"/>*/}
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
                            <X onClick={() => setIsOpen(false)}/>
                        ) : (
                            <Menu onClick={() => setIsOpen(true)}/>
                        )}
                    </div>

                </div>
            </div>
            {/* Mobile Menu*/}
            {isOpen && (
                <div
                    className="fixed translate-y-[9.5px] top-19 xl:hidden h-[calc(100vh)] w-full bg-black/60 backdrop-blur-[8px] z-90">
                    <div className="flex flex-col justify-center h-[calc(100svh)] -translate-y-20 space-y-3">
                        {menu.map((item, index) => (
                            <div key={index} className="text-center" onClick={() => setIsOpen(false)}>
                                <Link href={item.url} className="font-medium text-[14px] uppercase">{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

