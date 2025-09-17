import Image from "next/image";
import {JSX} from "react";

interface CustomButtonProps {
    className?: string;
}

export default function CustomButton({ className }: CustomButtonProps) {
    return (
        <button
            className={`relative flex items-center gap-x-2 button-gradient w-fit leading-8 group ${className}`}
        >
            {/* Hover shadow effect */}
            <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"
                style={{
                    background: "linear-gradient(180deg, rgba(205, 137, 57, 0) 43.67%, #D0AD6F 100%)",
                    mixBlendMode: "plus-lighter",
                    filter: "blur(32px)",
                }}
            />

            {/* Button content */}
            <p className="relative z-10">Find out if you qualify</p>
            <div className="relative z-10 bg-black px-3 py-3.5 rounded-full border border-white">
                <Image
                    src={"/svg/arrows/golden-right-arrow.svg"}
                    alt={"Golden Arrow Icon"}
                    width={16.65}
                    height={11.89}
                />
            </div>
        </button>

    )
}

