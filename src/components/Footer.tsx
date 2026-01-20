"use client";

import Image from "next/image";

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
            <div
                className="h-[1px] w-full lg:mb-30 max-lg:mt-15 mb-15"
                style={{
                    background:
                        "radial-gradient(50% 816.76% at 50% 50%, #1E1E1E 36.7%, rgba(28, 29, 34, 0) 100%)",
                }}
            />

            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-20">
                {/* Left Side - Logo */}
                <div className="">
                    <Image
                        src="/svg/logo.svg"
                        alt="Logo"
                        width={163.33}
                        height={48}
                        className="max-lg:scale-90"
                    />
                </div>

                {/* Navigation */}
                <div>
                    <p className="font-inter font-medium text-base mb-3.5">Navigation</p>
                    <ul className="font-inter font-normal text-base text-[#9194A1] mt-1.5 space-y-2.5 !tracking-[-0.38px]">
                        <li>
                            <a href="#platform-overview">
                                Platform Overview
                            </a>
                        </li>
                        <li>
                            <a href="#how-it-works">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a href="#compare-processors">
                                Compare Processors
                            </a>
                        </li>
                        <li>
                            <a href="#awards">
                                Awards
                            </a>
                        </li>
                        <li>
                            <a href="#leadership">
                                Leadership
                            </a>
                        </li>
                    </ul>
                </div>

                {/* ✅ NEW COLUMN: Legal / Policies */}
                <div>
                    <p className="font-inter font-medium text-base mb-3.5">Legal</p>
                    <ul className="font-inter font-normal text-base text-[#9194A1] mt-1.5 space-y-2.5 !tracking-[-0.38px]">
                        <li>
                            <a href="/terms-conditions">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="/cookie-policy">Cookie Policy</a>
                        </li>
                        <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Contact / Work With Us */}
                <div>
                    <a
                        className="font-inter font-medium text-base"
                        href="mailto:info@privateprocessing.com"
                    >
                        info@privateprocessing.com
                    </a>
                    <div className="flex items-center gap-x-2 mt-3">
                        <a
                            href="https://wa.me/971528072627"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-inter font-medium text-base text-[#9194A1]"
                        >
                            Work With Us
                        </a>
                        <Image
                            src={"/svg/arrows/gray-arrow.svg"}
                            alt={"Gray Arrow Icon"}
                            width={15.42}
                            height={8}
                        />
                    </div>
                    <div className="flex items-center gap-x-2 mt-3">
                        <a
                            href="https://www.youtube.com/@PrivateProcessing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-inter font-medium text-base text-[#9194A1]"
                        >
                            YouTube
                        </a>
                        <Image
                            src={"/svg/social-media/youtube.svg"}
                            alt={"YouTube Icon"}
                            width={26}
                            height={20}
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex md:flex-row flex-col justify-between items-start mt-30">
                <div className="basis-5/7">
                    <div className="flex items-center gap-5">
                        <p className="font-semibold">Disclaimer</p>
                        <hr className="w-full border-[#1E1E1E] h-[0.5px]"/>
                    </div>
                    <p className="mt-2 text-[12px] text-white/60">
                        At Private Processing, we provide exclusive and secure payment
                        solutions designed to protect e-commerce entrepreneurs from
                        blocked accounts and frozen funds. Our mission is to deliver
                        long-term stability and confidence through a private-banking
                        approach to global payment processing.
                    </p>
                    <p className="mt-5 text-[14px] text-white/60">
                        © Private Processing. All Rights RESERVED
                    </p>
                </div>

                <div className="basis-1/7 flex items-center justify-end gap-5 max-md:mb-10 max-lg:hidden">
                    <a className="font-roboto text-base font-semibold uppercase flex gap-x-1" href="#">
                        <p>Back to top</p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.75 7.5C12.525 7.5 12.375 7.425 12.225 7.275L8.475 3.525C8.175 3.225 8.175 2.775 8.475 2.475C8.775 2.175 9.225 2.175 9.525 2.475L13.275 6.225C13.575 6.525 13.575 6.975 13.275 7.275C13.125 7.425 12.975 7.5 12.75 7.5Z"
                                fill="white"/>
                            <path
                                d="M5.25 7.5C5.025 7.5 4.875 7.425 4.725 7.275C4.425 6.975 4.425 6.525 4.725 6.225L8.475 2.475C8.775 2.175 9.225 2.175 9.525 2.475C9.825 2.775 9.825 3.225 9.525 3.525L5.775 7.275C5.625 7.425 5.475 7.5 5.25 7.5Z"
                                fill="white"/>
                            <path
                                d="M9 15.75C8.55 15.75 8.25 15.45 8.25 15V3C8.25 2.55 8.55 2.25 9 2.25C9.45 2.25 9.75 2.55 9.75 3V15C9.75 15.45 9.45 15.75 9 15.75Z"
                                fill="white"/>
                        </svg>
                    </a>
                </div>

                <div className="basis-1/7 flex items-center justify-end gap-7 max-md:mt-10 lg:hidden">
                    <a className="font-roboto text-base font-semibold uppercase flex gap-x-1" href="#">
                        <p>Back to top</p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.75 7.5C12.525 7.5 12.375 7.425 12.225 7.275L8.475 3.525C8.175 3.225 8.175 2.775 8.475 2.475C8.775 2.175 9.225 2.175 9.525 2.475L13.275 6.225C13.575 6.525 13.575 6.975 13.275 7.275C13.125 7.425 12.975 7.5 12.75 7.5Z"
                                fill="white"/>
                            <path
                                d="M5.25 7.5C5.025 7.5 4.875 7.425 4.725 7.275C4.425 6.975 4.425 6.525 4.725 6.225L8.475 2.475C8.775 2.175 9.225 2.175 9.525 2.475C9.825 2.775 9.825 3.225 9.525 3.525L5.775 7.275C5.625 7.425 5.475 7.5 5.25 7.5Z"
                                fill="white"/>
                            <path
                                d="M9 15.75C8.55 15.75 8.25 15.45 8.25 15V3C8.25 2.55 8.55 2.25 9 2.25C9.45 2.25 9.75 2.55 9.75 3V15C9.75 15.45 9.45 15.75 9 15.75Z"
                                fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
