import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Section1() {
    return (


    <section className="mt-25 relative z-10" id="platform" style={{
            background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, #2E2A26 113.42%)",
        }}>
            <div className="max-w-[1200px] mx-auto w-11/12">
                <hr className="border-t border-[#1F2026] mb-27 mt-20"/>
                <div className="flex lg:flex-row flex-col gap-10 items-center justify-between">
                    <div className="flex justify-between w-full items-center xl:flex-row flex-col">
                        <p className="text-[40px] font-inter xl:max-w-[526px] leading-12 max-xl:text-center">Find and apply for <span
                            className="font-manrope font-medium text-gold">payment processors worldwide.</span></p>

                        <div className="w-px h-[160px] bg-white/30 mx-5 max-xl:hidden"/>

                        <p className="text-[20px] font-inter text-[#ACAFB9] xl:max-w-[536px] max-xl:text-center mt-3">Imagine working with payment
                            processors that want to grow with you and offer one-on-one support — so you can scale to
                            $10M+ per month without headaches.</p>
                    </div>
                </div>

                <div className="flex justify-between mt-20 xl:flex-row flex-col gap-y-10">
                {/*  Card 1  */}
                    <div className="max-w-[380px] border border-[#38332e] rounded-[12px] p-5 pb-0 mx-auto" style={{
                        background: "linear-gradient(307.8deg, rgba(46, 42, 38, 0) -51.02%, #2E2A26 132.67%)",}}
                    >
                        <p className="text-white font-medium text-lg">Compare Processors</p>
                        <p className="text-[#ACAFB9] font-light text-base">Compare up to 3–5 payment processors side by side to review differences in regions, payment methods, onboarding time, and risk fit — and apply to the best match.</p>
                        <div>
                            <p className="w-fit rounded-full py-1.5 px-3 mt-3" style={{
                                background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, #2E2A26 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))",
                            }}>Qualified - <span>Eligible</span></p>
                            <p className="w-fit rounded-full py-1.5 px-3 mt-3" style={{
                                background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, #2E2A26 100%)",
                                border: "1px solid rgba(255, 255, 255, 0.12)",
                                filter: "drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25))",
                            }}>Request Sent - <span>Under Review</span></p>
                        </div>
                        <Image src={"/img/img_1.png"} alt={"Adyen Image"} width={337} height={276}/>
                    </div>

                    {/*  Card 2  */}
                    <div className="max-w-[380px] border border-[#38332e] rounded-[12px] mx-auto" style={{
                        background: "linear-gradient(307.8deg, rgba(46, 42, 38, 0) -51.02%, #2E2A26 132.67%)",}}
                    >
                        <div className="p-5">
                            <p className="text-white font-medium text-lg">Qualification Status</p>
                            <p className="text-[#ACAFB9] font-light text-base">See in real-time for which payment processors you qualify for with your online shop and get onboarded in days.</p>
                        </div>
                        <div className="!border-b-0 rounded-[10px] mt-11" style={{
                            // background: "linear-gradient(204.36deg, #666666 -21.28%, rgba(83, 83, 83, 0.8) 8.54%, #000000 77.24%)",
                            border: "1px solid #383735",
                            boxShadow: "4px 0px 8.6px rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(6px)",
                        }}>
                            <Image src={"/img/img_2.png"} alt={"Compare Image"} width={379} height={245}/>
                        </div>
                    </div>

                    {/*  Card 3  */}
                    <div className="max-w-[380px] border border-[#38332e] rounded-[12px] p-5 pt-0 mx-auto" style={{
                        background: "linear-gradient(307.8deg, rgba(46, 42, 38, 0) -51.02%, #2E2A26 132.67%)",}}
                    >
                        <Image src={"/img/img_4.png"} alt={"Nomupay Image"} width={337} height={276} className="flex justify-center"/>
                        <p className="text-white font-medium text-lg">Global Payment Coverage</p>
                        <p className="text-[#ACAFB9] font-light text-base">Every processor on the platform is matched to your business data, compliance profile, and risk assessment.</p>
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <CustomButton text="Start For Free" className="mt-10 mb-20"/>
                </div>
            </div>

    </section>
    )
}