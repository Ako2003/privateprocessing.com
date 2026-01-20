import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Section4(){
    return(
        <section className="pt-35 mt-20 pb-30" id="private-processing-solution">
            <div className="mx-auto max-w-[1200px] w-11/12 overflow-hidden">
                <div className="flex lg:flex-row flex-col-reverse items-center justify-between max-lg:mt-10 gap-x-10">
                    <div>
                        <Image src={"/img/img_13.png"} alt={"Total Revenue Image"} width={589}
                               height={389}/>
                    </div>
                    <div className="lg:w-[700px] mb-10">
                        <div>
                            <h3 className="!font-normal !text-[44px] tracking-tighterWe support  !font-inter">Do you offer <span
                                className="!font-medium text-gold font-manrope">subscriptions</span>?</h3>
                            <p className="font-inter font-semibold text-white mt-3 text-lg">
                                → No problem.
                            </p>
                            <p className="text-[#ACAFB9] mt-3 !tracking-[-0.38px] text-[20px]">
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