import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import ArrowText from "@/components/main/ArrowText";

export default function Section5() {
    return (
        <section className="mt-20 max-w-[1200px] mx-auto w-11/12">
            <div className="max-w-[800px] mx-auto text-center">
                <p className="lg:text-[52px] text-[40px] leading-14 max-lg:leading-12">We support <span className="text-gold font-medium">low, medium and high risk</span> e-commerce.
                </p>
                <p className="text-[#ACAFB9] text-[20px] mt-5">Each payment processor is specialized in a different
                    area. Our platform allows you to find processors that perfectly fit your business type and
                    industry.</p>
            </div>
            <div className="flex justify-between mt-20 xl:flex-row flex-col gap-y-10">
                {/*  Card 1  */}
                <div className="max-w-[380px] border border-[#38332e] rounded-[12px] p-5 pb-0 mx-auto" style={{
                    background: "linear-gradient(307.8deg, rgba(46, 42, 38, 0) -51.02%, #2E2A26 132.67%)",
                }}
                >
                    <p className="text-white font-medium text-lg">Risk-Aware Assessment</p>
                    <p className="text-[#ACAFB9] font-light text-base">Every processor is matched to your business
                        model, industry, and risk level — from low to high-risk e-commerce.</p>

                    <Image src={"/img/img_5.png"} alt={"Wallet Image"} width={341} height={298} className="mt-10"/>
                </div>

                {/*  Card 2  */}
                <div className="max-w-[380px] border border-[#38332e] rounded-[12px] mx-auto" style={{
                    background: "linear-gradient(307.8deg, rgba(46, 42, 38, 0) -51.02%, #2E2A26 132.67%)",
                }}
                >
                    <div className="flex justify-center w-full" style={{
                        background: "rgba(0, 0, 0, 0.56)",
                        border: "1px solid #242424",
                        backdropFilter: "blur(5.35px)",
                        borderRadius: "16px",
                    }}>
                        <Image src={"/img/img_7.png"} alt={"Total Order Image"} width={337} height={298}/>
                    </div>
                    <div className="p-5">
                        <p className="text-white font-medium text-lg">Specialized Processor Matching</p>
                        <p className="text-[#ACAFB9] font-light text-base">We connect you only with processors that
                            support your risk level.</p>
                    </div>
                </div>

                {/*  Card 3  */}
                <div className="max-w-[380px] border border-[#38332e] rounded-[12px] p-5 pb-0 mx-auto" style={{
                    background: "linear-gradient(307.8deg, rgba(46, 42, 38, 0) -51.02%, #2E2A26 132.67%)",
                }}
                >
                    <p className="text-white font-medium text-lg">Long-Term Partnership</p>
                    <p className="text-[#ACAFB9] font-light text-base">Get onboarded with processors that understand your business and want to grow with you.</p>

                    <Image src={"/img/img_9.png"} alt={"Average Order Value Image"} width={341} height={298} className="mt-7"/>
                </div>
            </div>
        </section>
    )
}

