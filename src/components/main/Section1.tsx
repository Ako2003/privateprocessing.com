import Image from "next/image";

export default function Section1() {
    return (
        <div className="flex items-center justify-between gap-x-20 mx-auto max-w-[1400px] w-11/12">
            <div>
                <Image src={"/img/img.png"} alt={"Aziz reading a newspaper"} width={574} height={603}/>
            </div>
            <div>
                <h2 className="max-w-[700px]">
                    <span className="text-gold capitalize font-bold">private processing™</span> <br/>
                    The first class experience of payment processing
                </h2>
                <p className="font-semibold text-lg max-w-[550px] mt-5">Imagine having a personal Private Processing Manager on your side.</p>
                <p className="font-inter font-light text-lg max-w-[550px] mt-5">Someone that takes care of everything and can solve any challenge in payment processing for you.</p>
            </div>
        </div>
    )
}