import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import ArrowText from "@/components/main/ArrowText";
import VideoButton from "@/components/VideoButton";
import Marquee from "react-fast-marquee";
import {Dispatch, SetStateAction} from "react";

const marquee_elements = ["Old school support", "No blocked accounts", "Dedicated processing agent", "No frozen support", "No support chatbots"]

export default function Hero({ setModalVisible }: {  setModalVisible: Dispatch<SetStateAction<boolean>>}) {
    return (
        <section className="relative z-10 overflow-hidden max-md:bg-black md:bg-[linear-gradient(180deg,rgba(46,42,38,0)_0%,#2E2A26_100%)]">
            <div className="absolute translate-y-20 lg:-translate-y-30 2xl:-translate-y-50 max-lg:hidden">
                <Image src={"/svg/backgrounds/bg.svg"} alt={"Background Image"} width={2272} height={1419}
                       className="opacity-20"/>
            </div>
            <div className="absolute -z-1 lg:-translate-y-30 translate-y-25 right-0 h-[calc(100vh+200px)] w-full">
                <div className="opacity-60 max-lg:hidden" style={{
                    position: "absolute",
                    width: "282.58px",
                    height: "274.82px",
                    left: "1100px",
                    top: "400px",
                    background: "radial-gradient(72.05% 58.52% at 50% 49.92%, rgba(192, 160, 109, 0.4) 0%, rgba(0, 0, 0, 0) 86.74%)",
                    filter: "blur(2px)",
                }}/>
                <div className="opacity-35 max-lg:hidden" style={{
                    position: "absolute",
                    width: "282.58px",
                    height: "274.82px",
                    left: "1050px",
                    top: "300px",
                    background: "radial-gradient(72.05% 58.52% at 50% 49.92%, rgba(192, 160, 109, 0.4) 0%, rgba(0, 0, 0, 0) 86.74%)",
                    filter: "blur(2px)",
                }}/>
                <Image src={"/svg/backgrounds/bg1.svg"} alt={"Background Image"} fill
                       className="max-lg:scale-170 opacity-20"/>

                <div className="absolute max-md:bottom-0 bottom-0 h-[709px] w-full" style={{
                    background: "linear-gradient(182.37deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.9) 68.43%, #000000 126.06%)",
                }}/>
            </div>
            <div className="md:hidden mt-5">
                <Image src={"/img/img_18.png"} alt={"Bg image"} width={393} height={386} className="w-full"/>
                <div className="mx-auto max-w-[1200px] w-11/12 ">
                    <div className="flex flex-col justify-center h-full -translate-y-10">
                        <h1 className="text-silver !font-inter !font-normal !text-[36px] tracking-[-0.38px]">
                            We make <span className="text-gold font-manrope !font-medium">the best payment processors </span>
                            <br/> accessible for you
                        </h1>
                        <p className="lg:text-[16px] text-[18px] leading-6 mt-4 font-inter text-[#ACAFB9] max-w-md max-lg:font-light">
                            The go-to platform for fast-growing e-commerce stores that need better payment processing.
                        </p>
                        <div className="flex sm:items-center gap-5 mt-8 sm:flex-row">
                            <CustomButton text="Start for free"/>
                            <VideoButton setModalVisible={setModalVisible}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="lg:hidden border-t border-[#1F2026]"/>
            <div className="mx-auto max-w-[1200px] w-11/12 ">
                <div className="relative z-10 md:h-[calc(100svh)] flex flex-col justify-between">
                    <div className="relative flex h-full max-md:hidden">
                        <div className="flex flex-col justify-center h-full lg:translate-y-15 translate-y-8">
                            <h1 className="!text-[44px] text-silver !font-inter !font-normal tracking-tighter">
                                We make <span className="text-gold font-manrope !font-medium">the best payment processors </span>
                                <br/> accessible for you
                            </h1>
                            <p className="lg:text-[16px] text-[14px] leading-6 mt-4 font-inter text-[#ACAFB9] max-w-md !tracking-[-0.38px]">
                                The go-to platform for fast-growing e-commerce stores that need better payment
                                processing.
                            </p>
                            <div className="flex sm:items-center gap-5 mt-8 sm:flex-row flex-col">
                                <CustomButton text="Start for free"/>
                                <VideoButton setModalVisible={setModalVisible}/>
                            </div>
                        </div>
                        <div
                            className="absolute right-0 flex flex-col justify-center h-full lg:translate-y-15 max-xl:hidden">
                            <Image src={"/img/img.png"} alt={"Cards image"} width={667} height={584}/>
                        </div>
                    </div>

                    <div className="mb-5 mt-10">
                        <ArrowText title="we can help" className="mb-5"/>
                        <div className="flex justify-between max-lg:hidden">
                            {marquee_elements.map((item, index) => (
                                <div key={index} className="border border-[#FFFFFF]/18 p-3 rounded-full">
                                    <p className="text-[#BFBFBF] text-nowrap text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="lg:hidden">
                            <Marquee autoFill={true}>
                                {marquee_elements.map((item, index) => (
                                    <div key={index} className="border border-[#FFFFFF]/18 p-3 px-5 rounded-full mx-5">
                                        <p className="text-[#BFBFBF] text-nowrap text-sm">{item}</p>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}