import Image from "next/image";
import {JSX} from "react";

interface CustomButtonProps {
    className?: string;
}

export default function CustomButton({ className }: CustomButtonProps) {
    return(
        <button className={`flex items-center gap-x-2 button-gradient w-fit ${className}`}>
            <p>Find out if you qualify</p>
            <div className="bg-black px-3 py-3.5 rounded-full border border-white">
                <Image src={"/svg/arrows/golden-right-arrow.svg"} alt={"Golden Arrow Icon"} width={16.65} height={11.89}/>
            </div>
        </button>
    )
}

