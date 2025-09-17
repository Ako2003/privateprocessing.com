"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "./Dialog";
import CalendlyInline from "./CalendlyInline";

type CustomButtonProps = { className?: string };

export default function CustomButton({ className }: CustomButtonProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className={`relative flex items-center gap-x-2 button-gradient w-fit leading-8 group ${className}`}
                onClick={() => setOpen(true)}
            >
                {/* Hover shadow effect */}
                <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(205, 137, 57, 0) 43.67%, #D0AD6F 100%)",
                        mixBlendMode: "plus-lighter",
                        filter: "blur(32px)",
                    }}
                />
                <p className="relative z-10">Find out if you qualify</p>
                <div className="relative z-10 bg-black px-3 py-3.5 rounded-full border border-white">
                    <Image
                        src="/svg/arrows/golden-right-arrow.svg"
                        alt="Golden Arrow Icon"
                        width={16.65}
                        height={11.89}
                    />
                </div>
            </button>

            <Dialog
                open={open}
                onOpenChange={setOpen}
                size="xl"
                className="lg:pt-[84px] max-lg:translate-y-10"
                contentClassName="!bg-black lg:h-[700px] h-[550px] py-10"
                bodyClassName="p-0" // no padding
            >
                <div className="h-full">
                    <CalendlyInline
                        url="https://calendly.com/vincent-privateprocessing/discovery-call"
                        height="100%"
                    />
                </div>
            </Dialog>


        </>
    );
}
