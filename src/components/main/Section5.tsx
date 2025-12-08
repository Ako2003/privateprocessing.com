import Image from "next/image";
import {Cabin} from "next/dist/compiled/@next/font/dist/google";
import CustomButton from "@/components/CustomButton";

const points = [
    "No struggles with alternative payment options",
    "High Credit Card Acceptance Rates",
    "Dedicated Private Processing Executive Manager",
    "Reserves are discussed upfront",
    "Old School Support",
]

export default function Section5() {
    return (
        <section className="lg:mt-35 lg:overflow-hidden overflow-x-hidden">
            <div className="relative w-full flex lg:flex-row flex-col items-center lg:h-[600px] max-w-[1440px] mx-auto">

                <div className="lg:hidden w-11/12 mx-auto translate-y-30">
                    <h2 className="!font-normal lg:!text-[38px]">
                        <span className="text-gold font-manrope font-bold">A New World Opens.</span>
                        <br/>
                        The World Of Private Processing<span className="align-super text-lg ml-0.5">™</span>
                    </h2>
                    <p className="font-semibold text-lg mt-3">Top-tier advantages of Private Processing™</p>
                </div>
                <div className="relative basis-1/2 w-full max-lg:translate-y-30">
                    <Image src={"/img/img_4.png"} alt={"Vincent Pecho"} width={393} height={523}
                           className="object-cover lg:object-[25%_25%] object-[50%_25%] w-full h-[600px]"/>
                    <div
                        className="max-lg:hidden absolute left-0 h-[600px] w-full top-0 -translate-x-[30%]"
                        style={{
                            background: "linear-gradient(180.68deg, rgba(0, 0, 0, 0) 0.59%, #000000 88.24%)",
                            transform: "matrix(0, -1, -1, 0, 0, 0)",
                        }}
                    />
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
                    {/*<div className="bg-black/60 absolute inset-0 lg:hidden"/>*/}
                    <div className="relative z-0 h-full max-w-[1200px] lg:mx-auto w-11/12 py-15">
                        <div className="flex flex-col items-start justify-center h-full max-w-[1200px] mx-auto w-11/12">
                            <div className="max-lg:hidden">
                                <h2 className="!font-normal lg:!text-[38px]">
                                    <span className="text-gold font-manrope font-bold">A New World Opens.</span>
                                    <br/>
                                    The World Of Private Processing<span className="align-super text-lg ml-0.5">™</span>
                                </h2>
                                <p className="font-semibold text-lg mt-3">Top-tier advantages of Private Processing™</p>
                            </div>
                            <hr className="max-lg:hidden border-t border-[#2b2b2b] w-full my-10 max-w-[677px]"/>
                            <div className="mb-5">
                                {points.map((point, i) => (
                                    <div key={i} className="flex items-center gap-x-3 mb-3 text-whitisch">
                                        <Image src={"/svg/golden-tick.svg"} alt={"Golden Tick Icon"} width={15.19}
                                               height={10.76}/>
                                        <p className="font-intel font medium text-lg capitalize">{point}</p>
                                    </div>

                                ))}
                            </div>
                            <CustomButton text="Start for free" className="mt-3"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}