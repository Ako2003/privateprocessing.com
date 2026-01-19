"use client";

import Image from "next/image";

type VideoButtonProps = { className?: string, text?: string, disabled?: boolean };

export default function VideoButton({disabled,  text = "How it works?", className }: VideoButtonProps) {

    return (
        <>
            <button
                className={`video-button-gradient p-3 cursor-pointer w-fit ${className}`}
                disabled={disabled}
            >
                    <p className="font-inter relative z-10 tracking-normal capitalize font-semibold text-sm">{text}</p>
            </button>

        </>
    );
}
