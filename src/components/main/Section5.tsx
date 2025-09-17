import Image from "next/image";
import {Cabin} from "next/dist/compiled/@next/font/dist/google";
import CustomButton from "@/components/main/CustomButton";

const points = [
    "No struggles with alternative payment options",
    "High Credit Card Acceptance Rates",
    "Dedicated Private Processing Executive Manager",
    "Reserves are discussed upfront",
    "Old School Support",
]

export default function Section5() {
    return (
        <section className=" overflow-hidden">
            <div className="relative w-full flex lg:flex-row flex-col items-center">
                <div className="basis-1/2 w-full max-lg:translate-y-30">
                    <Image src={"/img/img_4.png"} alt={"Vincent Pecho"} width={393} height={523} className="object-cover object-[25%_15%] w-full" />
                </div>
                <div>
                    <div
                        className="max-lg:hidden absolute inset-0 translate-x-[10%]"
                        style={{
                            background:
                                "linear-gradient(270.04deg, rgba(0, 0, 0, 0) 3.05%, #000000 34.03%)",
                            transform: "rotate(180deg)",
                        }}
                    />

                    <div className="bg-black/60 absolute inset-0 lg:hidden"/>
                    <div className="relative z-0 h-full max-w-[1200px] lg:mx-auto w-11/12 py-15">
                        <div className="flex flex-col items-start justify-center h-full max-w-[1200px] mx-auto w-11/12">
                            <div>
                                <h2 className="!font-normal lg:!text-[38px]">
                                    <span className="text-gold font-manrope font-bold">A New World Opens.</span>
                                    <br />
                                    The World Of Private Processing<span className="align-super text-lg ml-0.5">™</span>
                                </h2>
                                <p className="font-semibold text-lg mt-3">Top-tier advantages of Private Processing™</p>
                            </div>
                            <hr className="border-t border-[#2b2b2b] w-full my-10 max-w-[677px]"/>
                            <div className="mb-5">
                                {points.map((point, i) => (
                                    <div key={i} className="flex items-center gap-x-3 mb-3 text-whitisch">
                                        <Image src={"/svg/golden-tick.svg"} alt={"Golden Tick Icon"} width={15.19}
                                               height={10.76}/>
                                        <p className="font-intel font medium text-lg capitalize">{point}</p>
                                    </div>

                                ))}
                            </div>
                            <CustomButton className="mt-3"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}