"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const menu = [
    {title: "Private processing solution", url: "#private-processing-solution"},
    {title: "Shared values", url: "#shared-values"},
    {title: "Mission", url: "#mission"},
    {title: "Awards", url: "#awards"},
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="relative">
            <div className="fixed w-full py-4 bg-black/60 lg:backdrop-blur-[4px] backdrop-blur-[8px] z-100">
                <div className="flex items-center justify-between max-w-[1200px] mx-auto w-11/12">
                    <div className="flex gap-x-30 items-center">
                        <div>
                            <Link href="/" className="max-xl:hidden">
                                <Image src="/svg/logo.svg" alt={"Private Processing Logo"} width={153} height={48}/>
                            </Link>
                            <Link href="/" className="xl:hidden">
                                <Image src="/svg/logo-small.svg" alt={"Private Processing Logo"} width={48.31} height={48}/>
                            </Link>
                        </div>

                        <div className="flex gap-x-15 max-xl:hidden">
                            {menu.map((item, index) => (
                                <div key={index}>
                                    <Link href={item.url} className="font-medium text-xs uppercase">{item.title}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <CustomButton className="max-xl:hidden"/>

                    <div className="xl:hidden transition-all duration-500 z-100">
                        {isOpen ? (
                            <X onClick={()=>setIsOpen(false)}/>
                        ) : (
                            <Menu onClick={()=>setIsOpen(true)}/>
                            )}
                    </div>

                </div>
            </div>
            {/* Mobile Menu*/}
            {isOpen && (
                <div className="fixed translate-y-[9.5px] top-19 xl:hidden h-[calc(100vh)] w-full bg-black/60 backdrop-blur-[8px] z-90">
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

