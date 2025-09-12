import Image from "next/image";

interface ArrowTextProps {
    title: string;
    className?: string;
}

export default function ArrowText({ title, className }: ArrowTextProps) {
    return (
        <div className={`flex items-center gap-x-2 mb-3 ${className}`}>
            <Image src={"/svg/arrows/white-down-right-arrow.svg"} alt={"White down right arrow"} width={10}
                   height={10}/>
            <p className="font-manrope font-bold text-[11px] uppercase">{title}</p>
        </div>
    )
}