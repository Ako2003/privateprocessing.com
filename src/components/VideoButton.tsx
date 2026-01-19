"use client";

import {Dispatch, SetStateAction,} from "react";
type VideoButtonProps = { className?: string, text?: string, disabled?: boolean, setModalVisible: Dispatch<SetStateAction<boolean>> };

export default function VideoButton({disabled,  text = "How it works?", className, setModalVisible }: VideoButtonProps) {

    return (
        <>
            <button
                className={`video-button-gradient p-3 cursor-pointer w-fit ${className}`}
                disabled={disabled}
                onClick={() => setModalVisible(true)}
            >
                    <p className="font-inter relative z-10 tracking-normal capitalize font-semibold text-sm">{text}</p>
            </button>


        </>
    );
}


