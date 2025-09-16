import ArrowText from "@/components/main/ArrowText";
import CustomButton from "@/components/main/CustomButton";
import Image from "next/image";

const points = [
    "Millions in Revenue per Month but no stability in payments",
    "Risk of getting blocked for no reason",
    "Fear of “Your funds are on hold” Emails",
    "Support chatbot can’t help you",
    "Shopify Payments / Stripe Issues",
    "Issues with local payment options",
    "Paranoia if you can scale without payment issues"
]

export default function Section3() {
    return(
        <section className="lg:mt-50 mt-35">
            <div className="flex flex-col items-center lg:justify-between gap-x-20 mx-auto max-w-[1200px] w-11/12">
                <div className="flex lg:flex-row flex-col justify-between w-full lg:items-end gap-5 ;g:mb-10">
                    <div>
                        <ArrowText title={"The problem no one seems to solve"} />
                        <h2 className="lg:!text-[38px]">Why E-Commerce <br/> <span className="text-gold font-bold">Whales use Private Processing™</span></h2>
                    </div>
                    <div className="max-lg:hidden">
                        <CustomButton />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-10 items-center justify-between w-full mt-5">
                    <div className="max-lg:w-full">
                        <Image src={"/img/img_2.png"} alt={"Account Restricted Image"} width={520} height={540} />
                    </div>
                    <div>
                        {points.map((item, index) => (
                            <div key={index} className="space-y-5">
                                <div className="flex items-center gap-x-5">
                                    <Image src="/svg/red-cross.svg" alt={"Red Cross"} width={22} height={22}/>
                                    <p className="font-bold lg:text-[20px] text-[18px] max-w-[600px] tracking-wider capitalize">{item}</p>
                                </div>
                                {index !== points.length - 1 && (
                                    <hr className="border-t border-[#2B2B2B] w-full mb-5"/>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-start w-full mt-10 lg:hidden">
                    <CustomButton />
                </div>
            </div>
        </section>
    )
}