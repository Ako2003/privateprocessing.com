import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";

export default function Section4(){
    return(
        <section className="lg:pt-40 py-20">
            <div className="mx-auto max-w-[1400px] w-11/12">
                <div>
                    <ArrowText title={"Private Processing™ Solution"} className="justify-center" />
                    <h3 className="text-center !text-[35px] capitalize">
                        <span className="text-gold font-bold uppercase">Time for the best.</span>
                        <br />
                        Time for Private Processing™
                    </h3>
                    <p className="text-center max-w-[950px] mx-auto mt-5 text-lg">If you never want to face payment processing issues again and process 1M–100M per month with stability  and peace of mind, the first step is to switch from Retail Processing to Private Processing™.</p>
                </div>

                <div className="flex lg:flex-row flex-col-reverse items-center justify-between max-lg:mt-10">
                    <div className="lg:w-[474px]">
                        <div>
                            <h3 className="!font-semibold">What is Retail Processing?</h3>
                            <p className="font-inter font-light text-whitisch mt-3">
                                Retail Processors (Shopify Payments, Stripe, PayPal, Airwallex, etc.) are the
                                supermarkets of payment processing.
                            </p>
                            <p className="font-inter font-light text-whitisch mt-3">
                                They serve everyone but no one gets treated well.
                            </p>
                        </div>
                        <hr className="border-t border-[#2b2b2b] w-full my-5"/>
                        <div>
                            <h3 className="!font-semibold">What are Private Processors?</h3>
                            <p className="font-inter font-light text-whitisch mt-3">
                                Private Processors are the private banks of payment processing and e-com; whales
                                leverage them to process with peace of mind.
                            </p>
                            <p className="font-inter font-light text-whitisch mt-3">
                                Instead of treating you like a number in the system, Private Processors build a
                                long-term business relationship with you that helps you to grow stress-free.
                            </p>
                        </div>
                        <hr className="border-t border-[#2b2b2b] w-full my-5"/>
                        <div>
                            <h3 className="!font-semibold">Their number #1 priority?</h3>
                            <p className="font-inter font-light text-whitisch mt-3">
                                Making sure you can process payments. Because the more you process the more they earn.
                            </p>
                        </div>
                        <hr className="border-t border-[#2b2b2b] w-full mt-5"/>
                        <CustomButton className="mt-8"/>
                    </div>
                    <div className="">
                        <Image src={"/img/img_3.png"} alt={"Private processing over other platforms"} width={808} height={760} className="-translate-y-20"/>
                    </div>
                </div>
            </div>
        </section>
    )
}