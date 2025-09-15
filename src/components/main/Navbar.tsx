"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const menu = [
    {title: "Private processing solution", url: "#private-processing-solution"},
    {title: "Mission", url: "#mission"},
    {title: "Shared values", url: "#shared-values"},
    {title: "Awards", url: "#awards"},
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="relative">
            <div className="fixed w-full py-4 bg-black z-100">
                <div className="flex items-center justify-between max-w-[1400px] mx-auto w-11/12">
                    <div>
                        <Link href="/" className="max-lg:hidden">
                            <Image src="/svg/logo.svg" alt={"Private Processing Logo"} width={153} height={48}/>
                        </Link>
                        <Link href="/" className="lg:hidden">
                            <Image src="/svg/logo-small.svg" alt={"Private Processing Logo"} width={48.31} height={48}/>
                        </Link>
                    </div>

                    <div className="flex gap-x-6 max-lg:hidden">
                        {menu.map((item, index) => (
                            <div key={index}>
                                <Link href={item.url} className="font-normal text-xs uppercase">{item.title}</Link>
                            </div>
                        ))}
                    </div>

                    <CustomButton />

                    <div className="lg:hidden transition-all duration-500">
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
                <div className="fixed top-19 lg:hidden h-[calc(100vh-70px)] w-full bg-black/80 backdrop-blur-sm z-10">
                    <div className="flex flex-col justify-center h-full">
                        {menu.map((item, index) => (
                            <div key={index} className="text-center" onClick={() => setIsOpen(false)}>
                                <Link href={item.url} className="font-normal text-xs uppercase">{item.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}