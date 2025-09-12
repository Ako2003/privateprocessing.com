import Image from "next/image";
import {Cabin} from "next/dist/compiled/@next/font/dist/google";
import CustomButton from "@/components/main/CustomButton";

const points = [
    "No struggles with alternative payment options",
    "High Credit Card Acceptance Rates.",
    "Dedicated Private Processing Executive Manager",
    "Reserves are discussed upfront",
    "Old School Support",
]

export default function Section5() {
    return (
        <section className="pt-40">
            <div className="relative w-full bg-[url('/img/img_4.png')] h-[660px] bg-contain bg-no-repeat">
                <div
                    className="absolute inset-0 translate-x-[10%]"
                    style={{
                        background:
                            "linear-gradient(270.04deg, rgba(0, 0, 0, 0) 3.05%, #000000 34.03%)",
                        transform: "rotate(180deg)",
                    }}
                />

                <div className="relative z-10 flex h-full items-center">
                    <div className="basis-4/5"/>
                    <div className="flex flex-col items-start max-w-[1400px] mx-auto w-11/12">
                        <div>
                            <h2 className="!font-normal">
                                <span className="text-gold font-manrope font-bold">A New World Opens.</span>
                                <br/>
                                The World Of Private Processing™
                            </h2>
                            <p className="font-semibold text-lg mt-3">Top-tier advantages of Private Processing™</p>
                        </div>
                        <hr className="border-t border-[#2b2b2b] w-full my-5 max-w-[677px]"/>
                        <div className="mb-5">
                            {points.map((point, i) => (
                                <div key={i} className="flex items-center gap-x-1 mb-3">
                                    <Image src={"/svg/golden-tick.svg"} alt={"Golden Tick Icon"} width={15.19} height={10.76} />
                                    <p className="font-intel font medium text-lg">{point}</p>
                                </div>

                            ))}
                        </div>
                        <CustomButton />
                    </div>

                </div>
            </div>
        </section>
    )
}