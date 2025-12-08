"use client";

import Image from "next/image";
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
            className="mx-auto max-w-[1200px] text-white pb-20 px-4 overflow-hidden"
        >

            <div className="h-[1px] w-full mb-10" style={{
                background: "radial-gradient(50% 816.76% at 50% 50%, #1E1E1E 36.7%, rgba(28, 29, 34, 0) 100%)",
            }}/>
            <div
                className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-20">
                {/* Left Side */}
                <div
                    className="max-w-md flex justify-between items-center w-full"
                >
                    <Image
                        src="/svg/logo.svg"
                        alt="Logo"
                        width={163.33}
                        height={48}
                    />

                    {/*<div className="flex gap-5 lg:hidden">*/}
                    {/*    <a*/}
                    {/*        href="https://wa.me/971528072627"*/}
                    {/*        target="_blank"*/}
                    {/*        rel="noopener noreferrer"*/}
                    {/*        className="font-inter font-medium text-base text-[#9194A1]"*/}
                    {/*    >*/}
                    {/*        <Image src={"/svg/social-media/whatsapp.svg"} alt={"Whatsapp Icon"} width={25} height={25}/>*/}
                    {/*    </a>*/}
                    {/*    <a href="https://www.instagram.com/samuel.aziz.boubaous?igsh=dnFvY2E2N3YyZmty">*/}
                    {/*        <Image src={"/svg/social-media/instagram.svg"} alt={"Instagram Icon"} width={25}*/}
                    {/*               height={25}/>*/}
                    {/*    </a>*/}
                    {/*    <a href="https://www.youtube.com/@samuelazizbusiness">*/}
                    {/*        <Image src={"/svg/social-media/youtube.svg"} alt={"Youtube Icon"} width={31} height={25}/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>

                <div>
                    <p className="font-inter font-medium text-base">Navigation</p>
                    <ul className="font-inter font-normal text-base text-[#9194A1] mt-1.5 space-y-3">
                        <li>
                            <a href="#private-processing-solution">Private Processing Solution </a>
                        </li>
                        <li>
                            <a href="#shared-values">Shared Values</a>
                        </li>
                    <li>
                        <a href="#mission">Mission</a>
                    </li>
                        <li>
                            <a href="#awards">Awards</a>
                        </li>
                    </ul>
                </div>

                {/* Back to top */}
                <div>
                    <a className="font-inter font-medium text-base"
                       href="mailto:info@privateprocessing.com">info@privateprocessing.com</a>
                    <div className="flex items-center gap-x-2 mt-3">
                        <a
                            href="https://wa.me/971528072627"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-inter font-medium text-base text-[#9194A1]"
                        >
                            Work With Us
                        </a>
                        <Image src={"/svg/arrows/gray-arrow.svg"} alt={"Gray Arrow Icon"} width={15.42} height={8}/>
                    </div>
                </div>
            </div>

            <div className="flex md:flex-row flex-col-reverse justify-between items-start mt-30">
                <div className="basis-5/7">
                    <div className="flex items-center gap-5">
                        <p className="font-semibold">Disclaimer</p>
                        <hr className="w-full border-[#1E1E1E] h-[0.5px]"/>
                    </div>
                    <p className="mt-2 text-[12px] text-white/60">At Private Processing, we provide exclusive and secure payment solutions designed to protect e-commerce entrepreneurs from blocked accounts and frozen funds. Our mission is to deliver long-term stability and confidence through a private-banking approach to global payment processing.</p>
                    <p className="mt-5 text-[14px] text-white/60">© Private Processing. All Rights RESERVED</p>
                </div>
                <div className="basis-1/7 flex items-center justify-end gap-5 max-md:mb-10 max-lg:hidden">
                    <a
                        href="https://wa.me/971528072627"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter font-medium text-base text-[#9194A1]"
                        >
                    <Image src={"/svg/social-media/whatsapp.svg"} alt={"Whatsapp Icon"} width={20} height={20}/>
                    </a>
                    <a href="https://www.instagram.com/samuel.aziz.boubaous?igsh=dnFvY2E2N3YyZmty">
                        <Image src={"/svg/social-media/instagram.svg"} alt={"Instagram Icon"} width={20} height={20}/>
                    </a>
                    <a href="https://www.youtube.com/@samuelazizbusiness">
                        <Image src={"/svg/social-media/youtube.svg"} alt={"Youtube Icon"} width={26} height={20} />
                    </a>
                </div>
                <div className="basis-1/7 flex items-center justify-end gap-7 max-md:mb-10 lg:hidden">
                    <a
                        href="https://wa.me/971528072627"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-inter font-medium text-base text-[#9194A1]"
                    >
                        <Image src={"/svg/social-media/whatsapp.svg"} alt={"Whatsapp Icon"} width={25} height={25}/>
                    </a>
                    <a href="https://www.instagram.com/samuel.aziz.boubaous?igsh=dnFvY2E2N3YyZmty">
                        <Image src={"/svg/social-media/instagram.svg"} alt={"Instagram Icon"} width={25}
                               height={25}/>
                    </a>
                    <a href="https://www.youtube.com/@samuelazizbusiness">
                        <Image src={"/svg/social-media/youtube.svg"} alt={"Youtube Icon"} width={31} height={25}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
