import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Section4(){
    return(
        <section className="pt-35 lg:mt-20 lg:pb-30 pb-10 max-lg:bg-[url('/img/img_21.png')]" id="private-processing-solution">
            <div className="mx-auto max-w-[1200px] w-11/12 overflow-hidden">
                <div className="flex lg:flex-row flex-col-reverse items-center justify-between max-lg:mt-10 gap-x-10">
                    <div className="max-lg:hidden">
                        <Image src={"/img/img_13.png"} alt={"Total Revenue Image"} width={589}
                               height={389}/>
                    </div>
                    <div className="lg:w-[700px] mb-10">
                        <div>
                            <h3 className="!font-normal lg:!text-[44px] !text-[32px] tracking-tighterWe support  !font-inter">Do
                                you offer <span
                                    className="!font-medium text-gold font-manrope">subscriptions</span>?</h3>
                            <p className="font-inter font-semibold text-white mt-3 text-lg">
                                → No problem.
                            </p>
                            <div className="lg:hidden mt-5">
                                <Image src={"/img/img_20.png"} alt={"Total Revenue Image"} width={687}
                                       height={447}/>
                            </div>
                            <p className="text-[#ACAFB9] mt-3 !tracking-[-0.38px] lg:text-[20px] text-[18px] font-light">
                                Find the best payment processors that support subscriptions.
                            </p>
                        </div>
                        <CustomButton className="mt-5" text="Start for free"/>
                    </div>
                </div>
            </div>
        </section>
    )
}