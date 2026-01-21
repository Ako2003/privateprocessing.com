import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Section4(){
    return(
        <section className="lg:pt-30 lg:mt-20 pt-35" id="private-processing-solution">
            <div className="mx-auto max-w-[1200px] w-11/12 overflow-hidden">
                <div className="flex lg:flex-row flex-col items-center justify-between max-lg:mt-10 ">
                    <div className="lg:w-[700px]">
                        <div className='space-y-5'>
                            <h3 className="!font-normal lg:!text-[44px] !text-[32px] tracking-tighter">Looking for
                                a <span
                                    className="!font-medium text-gold font-manrope">specific local payment</span> option?
                            </h3>
                            <p className="font-inter font-semibold text-white mt-3 text-lg">
                                → We have it. You can choose it.
                            </p>
                            <div className="z-0 ranslate-x-5 -translate-y-5 lg:hidden">
                                <Image src={"/img/img_3.png"} alt={"Private processing over other platforms"}
                                       width={808}
                                       height={760}
                                       className="lg:-translate-y-30 md:-translate-y-60 xs:-translate-y-30 -translate-y-20 scale-130"/>
                            </div>
                            <p className="text-[#ACAFB9] mt-3 !tracking-[-0.38px] lg:text-[20px] text-[18px] max-lg:-translate-y-12 font-light">
                                Filter payment processors based on local payment options and find processors that
                                perfectly fit your needs.
                            </p>
                            <div>
                                <CustomButton className="max-lg:-translate-y-8" text="Start for free"/>
                            </div>
                        </div>
                        {/*<hr className="border-t border-[#2b2b2b] w-full my-5"/>*/}
                        {/*<div>*/}
                        {/*    <h3 className="!font-semibold !text-[28px]">What are private processors?</h3>*/}
                        {/*    <p className="font-inter font-light text-whitisch mt-3">*/}
                        {/*        Private processors are the private banks of payment processing and e-com; whales*/}
                        {/*        leverage them to process with peace of mind.*/}
                        {/*    </p>*/}
                        {/*    <p className="font-inter font-light text-whitisch mt-3">*/}
                        {/*        Instead of treating you like a number in the system, private processors build a*/}
                        {/*        long-term business relationship with you that helps you to grow stress-free.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<hr className="border-t border-[#2b2b2b] w-full my-5"/>*/}
                        {/*<div>*/}
                        {/*    <h3 className="!font-semibold !text-[28px]">Their number #1 priority?</h3>*/}
                        {/*    <p className="font-inter font-light text-whitisch mt-3">*/}
                        {/*        Making sure you can process payments. Because the more you process the more they earn.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<hr className="border-t border-[#2b2b2b] w-full mt-5"/>*/}
                    </div>
                    <div className="z-0 max-lg:mt-5 max-lg:hidden">
                        <Image src={"/img/img_3.png"} alt={"Private processing over other platforms"} width={808}
                               height={760} className="lg:-translate-y-30 md:-translate-y-60 xs:-translate-y-30 -translate-y-20"/>
                    </div>
                </div>
            </div>
        </section>
    )
}