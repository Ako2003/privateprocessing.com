"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "./Dialog";
import CalendlyInline from "./CalendlyInline";

type CustomButtonProps = { className?: string, text?: string, disabled?: boolean };

export default function CustomButton({disabled,  text = "Find out if you qualify", className }: CustomButtonProps) {

    return (
        <>
            <button
                className={`relative flex items-center gap-x-2 button-gradient w-fit leading-8 group cursor-pointer ${className}`}
                disabled={disabled}
            >
                <a className="flex items-center gap-x-2" href="https://app.privateprocessing.com/signup"
                   target={"_blank"}>
                    {/* Hover shadow effect */}
                    <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(205, 137, 57, 0) 43.67%, #D0AD6F 100%)",
                            mixBlendMode: "plus-lighter",
                            filter: "blur(32px)",
                            border: "1px solid rgba(181, 148, 95, 0.33)",

                        }}
                    />
                    <p className="font-inter relative z-10 tracking-normal capitalize font-semibold text-sm">{text}</p>
                    <div
                        className="flex items-center justify-center w-11 h-11 rounded-full pointer-events-none"
                        style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '-2px 1px 4px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        <Image
                            src="/svg/arrows/black-right-arrow.svg"
                            alt="Black Arrow Icon"
                            width={13.19}
                            height={10.13}
                        />
                    </div>
                    {/*<div className="relative z-10 bg-black px-3 py-3.5 rounded-full border border-white">*/}
                    {/*    */}
                    {/*</div>*/}
                </a>
            </button>

        </>
    );
}
