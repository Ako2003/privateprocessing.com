import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section11(){
    return (
        <section className="lg:my-50 lg:pt-25 max-lg:pt-20" id="leadership">
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

                    <p className="absolute bottom-0 p-5 text-lg max-w-[500px] z-1 font-light"><span
                        className="font-bold text-white">@Vincent Pecho</span> — CEO of Private Processing™
                    </p>
                </div>
                <div className="lg:-translate-y-12">
                    <h2 className="max-w-[667px] lg:!text-[38px] !text-[32px] tracking-tighter !font-inter !font-normal !mb-10">
                        <span className="text-gold font-manrope font-medium">CEO</span> of Private
                        Processing<span className="align-super text-lg ml-0.5">™</span>
                    </h2>
                    <div className="relative lg:hidden my-5 max-w-[542px] mx-auto">
                        <Image src={"/img/img_14.png"} alt={"Vincent sitting"} width={542} height={596}
                               className="relative z-1"/>

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
                    <p className="lg:hidden text-lg text-whitisch -translate-y-5">
                        <span className="font-bold text-white">@Vincent Pecho</span> — CEO of Private
                        Processing™</p>
                    <p className="font-light text-lg max-w-[667px] mt-5 italic text-[#e2e2e2]">“Our mission is to build
                        the world’s best solution for payment processing—a platform that helps business owners find,
                        choose, and onboard with the right payment processors at the right time.</p>
                    <p className="font-light text-lg max-w-[667px] mt-5 italic text-[#e2e2e2]">This allows them to
                        benefit from better support, lower fees, higher credit card acceptance rates, and greater
                        stability and scalability—so they can process multi-millions in revenue per month without
                        headaches.”</p>
                    <p className="font-inter font-light lg:text-base text-[18px] max-w-[667px] mt-5 text-[#acafb9] !tracking-[-0.38px]">Vincent
                        Pecho is a German entrepreneur with over 10 years of experience in business, marketing,
                        branding, leadership, and e-commerce. He has spent the last years working intensively in the
                        e-commerce and payment processing space.</p>
                    <br />
                    <p className="font-inter font-light lg:text-base text-[18px] max-w-[667px] mb-5 text-[#acafb9] !tracking-[-0.38px]">He
                        joined Private Processing in 2024 after a successful exit from his previous company.</p>
                </div>
            </div>
        </section>
    )
}