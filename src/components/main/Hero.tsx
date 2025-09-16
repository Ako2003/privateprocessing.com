import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";
import Marquee from "react-fast-marquee";
import ArrowText from "@/components/main/ArrowText";

const marquee_elements = ["No Blocked Accounts", "Dedicated Processing Agent", "No Frozen Funds", "No Support Chatbots", "Old School Support"]

export default function Hero() {
    return (
        <section className="relative z-10 overflow-hidden">
            <div className="absolute translate-y-20 lg:-translate-y-30 2xl:-translate-y-50 max-lg:hidden">
                <Image src={"/svg/backgrounds/bg.svg"} alt={"Background Image"} width={2272} height={1419}/>
            </div>
            <div className="absolute -z-1 lg:-translate-y-30 translate-y-10 right-0 h-[calc(100vh+200px)] w-full">
                <Image src={"/svg/backgrounds/bg1.svg"} alt={"Background Image"} fill className="max-lg:scale-170"/>
                <div className="absolute max-lg:bottom-30 bottom-0 h-[709px] w-full" style={{
                    background: "linear-gradient(180deg, rgba(10, 10, 10, 0) 11.27%, rgba(10, 10, 10, 0.9) 81.87%, rgba(0, 0, 0, 0.95) 95.56%)",
                }}/>
            </div>
            <div className="absolute -z-30 lg:-translate-y-30 translate-y-30 right-0">
                <Image src={"/svg/backgrounds/golden-circle.svg"} alt={"Golden Circle"} width={606} height={583}/>
            </div>
            <div className="absolute -z-10 -bottom-60 left-1/2">
                <Image src={"/svg/backgrounds/golden-circle.svg"} alt={"Golden Circle"} width={606} height={583}/>
            </div>
            <div className="relative z-10 h-[calc(100svh)] flex flex-col justify-between">
                <div className="mx-auto max-w-[1200px] w-11/12 h-full">
                    <div className="flex flex-col justify-center h-full lg:max-w-[824px] max-w-[350px] lg:translate-y-15">
                        <h1>
                            Peace of mind in Payment Processing Is Only
                            <span className="text-gold font-semibold"> One Call Away ... </span>
                        </h1>
                        <p className="lg:text-[22px] text-[18px] max-w-[500px] capitalize leading-8 mt-8 font-light text-[#b7b7b7]">
                            Relief the stress of payment processing in e-com with private processing™
                        </p>
                        <CustomButton className="lg:mt-13 mt-8 w-fit"/>
                    </div>
                </div>

                <div className="mb-5">
                    <ArrowText title="we can help" className="justify-center mb-10"/>
                    <Marquee autoFill>
                        {marquee_elements.map((item, index) => (
                            <div key={index} className="mx-10">
                                <p className="uppercase text-gray">{item}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

        </section>
    )
}