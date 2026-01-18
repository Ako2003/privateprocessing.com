import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section11(){
    return (
        <section className="lg:my-50 mt-25">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1200px] w-11/12">
                <div className="relative max-lg:hidden -translate-y-10">
                    <Image src={"/img/img_14.png"} alt={"Vincent sitting"} width={542} height={596} className="relative z-1"/>
                    {/* White background of the image*/}
                    <div className="absolute h-full w-full bottom-0 z-0"
                         style={{
                             borderRadius: "10px",
                             background: "linear-gradient(180deg, rgba(46, 42, 38, 0) -49.57%, #2E2A26 100%)",
                         }}
                    />

                    {/* Dark layout of the image*/}
                    <div className="absolute h-[286px] w-full bottom-0 z-1"
                         style={{
                             background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                         }}
                    />

                    <p className="absolute bottom-0 p-5 text-lg max-w-[500px] z-1"><span
                        className="font-bold text-white">@Vincent Pecho</span> — CEO of Private Processing™
                    </p>
                </div>
                <div>
                    <h2 className="max-w-[667px] lg:!text-[38px]">
                        <span className="text-gold font-semibold">CEO</span> of Private
                        Processing<span className="align-super text-lg ml-0.5">™</span>
                    </h2>
                    <div className="relative lg:hidden my-5 max-w-[542px] mx-auto">
                        <Image src={"/img/img_14.png"} alt={"Vincent sitting"} width={542} height={596} className="relative z-1"/>

                        {/* White background of the image*/}
                        <div className="absolute h-full w-full bottom-0 z-0"
                             style={{
                                 borderRadius: "10px",
                                 background: "linear-gradient(180deg, rgba(46, 42, 38, 0) -49.57%, #2E2A26 100%)",
                             }}
                        />

                        {/* Dark layout of the image*/}
                        <div className="absolute h-[286px] w-full bottom-0 z-1"
                             style={{
                                 background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
                             }}
                        />

                    </div>
                    <p className="font-light text-lg max-w-[667px] mt-5 italic">“Our mission is to build the world’s best solution for payment processing—a platform that helps business owners find, choose, and onboard with the right payment processors at the right time.</p>
                    <p className="font-light text-lg max-w-[667px] mt-5 italic">This allows them to benefit from better support, lower fees, higher credit card acceptance rates, and greater stability and scalability—so they can process multi-millions in revenue per month without headaches.”</p>
                    <p className="font-inter font-light text-lg max-w-[667px] mt-5 text-whitisch">Vincent Pecho is a German entrepreneur with over 10 years of experience in business, marketing, branding, leadership, and e-commerce. He has spent the last years working intensively in the e-commerce and payment processing space.</p>
                    <p className="font-inter font-light text-lg max-w-[667px] mb-5 text-whitisch">He joined Private Processing in 2024 after a successful exit from his previous company.</p>
                    <p className="lg:hidden text-lg text-whitisch">
                        <span className="font-bold text-white">@Vincent Pecho</span> — CEO of Private
                        Processing™</p>
                </div>
            </div>
        </section>
    )
}