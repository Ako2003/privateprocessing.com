import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Section4(){
    return(
        <section className="lg:pt-30 lg:mt-20 pt-35" id="private-processing-solution">
            <div className="mx-auto max-w-[1200px] w-11/12 overflow-hidden">
                <div className="flex lg:flex-row flex-col-reverse items-center justify-between max-lg:mt-10 gap-x-10">
                    <div>
                        <Image src={"/img/img_13.png"} alt={"Total Revenue Image"} width={589}
                               height={389}/>
                    </div>
                    <div className="lg:w-[700px] mb-10">
                        <div>
                            <h3 className="!font-normal !text-[44px]">Do you offer <span
                                className="!font-medium text-gold">subscriptions</span>?</h3>
                            <p className="font-inter font-semibold text-white mt-3">
                                → No problem.
                            </p>
                            <p className="text-[#ACAFB9] mt-3">
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