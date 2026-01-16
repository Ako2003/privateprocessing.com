import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import ArrowText from "@/components/main/ArrowText";
import VideoButton from "@/components/VideoButton";

const marquee_elements = ["Old school support", "No blocked accounts", "Dedicated processing agent", "No frozen support", "No support chatbots"]

export default function Hero() {
    return (
        <section className="relative z-10 overflow-hidden" style={{
            background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, #2E2A26 100%)",
        }}>
                <div className="absolute translate-y-20 lg:-translate-y-30 2xl:-translate-y-50 max-lg:hidden">
                    <Image src={"/svg/backgrounds/bg.svg"} alt={"Background Image"} width={2272} height={1419} className="opacity-20"/>
                </div>
                <div className="absolute -z-1 lg:-translate-y-30 translate-y-10 right-0 h-[calc(100vh+200px)] w-full">
                    <Image src={"/svg/backgrounds/bg1.svg"} alt={"Background Image"} fill className="max-lg:scale-170 opacity-20"/>
                    <div className="absolute max-lg:bottom-30 bottom-0 h-[709px] w-full" style={{
                        background: "linear-gradient(179.07deg, rgba(10, 10, 10, 0) 5.84%, rgba(10, 10, 10, 0.9) 66.31%, rgba(0, 0, 0, 0.95) 128.02%)",
                    }}/>
                </div>

            {/*<div className="absolute -z-30 lg:-translate-y-60 translate-y-30 -right-15">*/}
                {/*    <Image src={"/svg/backgrounds/golden-circle.svg"} alt={"Golden Circle"} width={606} height={583}/>*/}
                {/*</div>*/}
                {/*<div className="absolute -z-10 -bottom-60 left-1/2">*/}
                {/*    <Image src={"/svg/backgrounds/golden-circle.svg"} alt={"Golden Circle"} width={606} height={583}/>*/}
                {/*</div>*/}
            <div className="mx-auto max-w-[1200px] w-11/12 ">
                <div className="relative z-10 h-[calc(100svh)] flex flex-col justify-between">

                    <div className="relative flex h-full">
                        <div className="flex flex-col justify-center h-full lg:translate-y-15">
                            <h1 className="text-silver">
                                We make <span className="text-gold font-medium">the best payment processors </span> <br /> accessible for you
                            </h1>
                            <p className="lg:text-[16px] text-[14px] leading-6 mt-4 font-inter text-[#ACAFB9] max-w-md">
                                The go-to platform for fast-growing e-commerce stores that need better payment processing.
                            </p>
                            <div className="flex items-center gap-x-5 mt-8">
                                <CustomButton text="Start for free"/>
                                <VideoButton />
                            </div>
                        </div>
                        <div className="absolute right-0 flex flex-col justify-center h-full lg:translate-y-15 max-xl:hidden">
                            <Image src={"/img/img.png"} alt={"Cards image"} width={667} height={584} />
                        </div>
                    </div>

                    <div className="mb-5">
                        <ArrowText title="we can help" className="mb-5"/>
                        <div className="flex justify-between">
                            {marquee_elements.map((item, index) => (
                                <div key={index} className="border border-[#FFFFFF]/18 p-3 rounded-full">
                                    <p className="text-[#BFBFBF] text-nowrap text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}