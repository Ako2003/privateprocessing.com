"use client";

import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export default function Footer() {
    return (
        <footer
            className="bg-black text-white pb-20 px-4 overflow-hidden"
        >
            <hr className="border-t border-[#3F3F3F] w-full container w-11/12 pb-10"/>
            <div
                className="container w-11/12 flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-20"
            >
                {/* Left Side */}
                <div
                    className="max-w-md"
                >
                    <Image
                        src="/svg/logo-gold.svg"
                        alt="Logo"
                        width={125}
                        height={133}
                    />
                    <p className="mt-20 text-[10px] text-white/60 max-md:hidden">* The use of Shopify and Stripe{"'"}s names and logos is for illustrative purposes only and does not imply endorsement or affiliation.</p>
                </div>

                {/* Back to top */}
                <div
                    className="ml-auto flex flex-col lg:items-end items-start"
                >
                    <h2 className="text-4xl font-medium mb-2 lg:text-right w-full">Private Processing</h2>
                    <p className="text-white/60 mb-2 lg:text-right w-full">
                        Feel free to reach out if you want to know more details.
                    </p>
                    <div className="w-full lg:text-right mb-6">
                        <a href="https://www.skool.com/wealthconsulting" target="_blank"
                           className="uppercase font-medium text-[13px] text-white/80 hover:text-white cursor-pointer">Join
                            Skool | </a>
                        <a href="https://wa.me/+971528072627" target="_blank"
                           className="uppercase font-medium text-[13px] text-white/80 hover:text-white cursor-pointer">Contact
                            Us</a>
                    </div>

                    <a href="#" className="flex flex-col items-center cursot-pointer">
                        <Image src={"/svg/main/arrow-up.svg"} alt={"Arrow Up"} height={40} width={40} className="mb-2"/>
                        <p
                            className="text-gray-400 text-sm text-center hover:text-white"
                        >
                            Back to top
                        </p>
                    </a>

                    <p className="mt-20 text-[10px] text-white/60 md:hidden">* The use of Shopify and Stripe{"'"}s names
                        and logos is for illustrative purposes only and does not imply endorsement or affiliation.</p>

                </div>
            </div>
        </footer>
    );
}
