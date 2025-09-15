import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";
import Marquee from "react-fast-marquee";
import ArrowText from "@/components/main/ArrowText";

const marquee_elements = ["No Blocked Accounts", "Dedicated Processing Agent", "No Frozen Funds", "No Support Chatbots", "Old School Support"]

export default function Hero() {
    return (
        <section className="relative z-10">
            <div className="absolute translate-y-20 lg:-translate-y-30 2xl:-translate-y-50">
                <Image src={"/svg/backgrounds/bg.svg"} alt={"Background Image"} width={2272} height={1419}/>
            </div>
            <div className="absolute -z-1 -translate-y-30 right-0 h-[calc(100vh+200px)] w-full">
                <Image src={"/svg/backgrounds/bg1.svg"} alt={"Background Image"} fill/>
                <div className="absolute bottom-40 h-[709px] w-full" style={{
                    background: "linear-gradient(180deg, rgba(10, 10, 10, 0) 11.27%, rgba(10, 10, 10, 0.9) 81.87%, rgba(0, 0, 0, 0.95) 95.56%)",
                }}/>
            </div>
            <div className="absolute -z-30 lg:-translate-y-30 translate-y-30 right-0">
                <Image src={"/svg/backgrounds/golden-circle.svg"} alt={"Golden Circle"} width={606} height={583}/>
            </div>
            <div className="absolute -z-10 -bottom-60 left-1/2">
                <Image src={"/svg/backgrounds/golden-circle.svg"} alt={"Golden Circle"} width={606} height={583}/>
            </div>
            <div className="h-[calc(100svh)] flex flex-col justify-between">
                <div className="mx-auto w-11/12 h-full">
                    <div className="flex flex-col justify-center h-full max-w-[824px]">
                        <h1>
                            Peace of mind in Payment Processing Is Only
                            <span className="text-gold font-semibold"> One Call Away ... </span>
                        </h1>
                        <p className="text-[24px] max-w-[500px] capitalize leading-8 mt-5">
                            Relief the stress of payment processing in e-com with private processing™
                        </p>
                        <CustomButton className="mt-10 w-fit"/>
                    </div>
                </div>

                <div className="mb-5">
                    <ArrowText title="we can help" className="justify-center"/>
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