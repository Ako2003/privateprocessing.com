import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section12(){
    return (
        <section className="lg:my-50 mt-25">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1200px] w-11/12">
                <div>
                    <h2 className="max-w-[667px] lg:!text-[38px]">
                        <span className="text-gold capitalize font-semibold">The Founder</span> of Private
                        Processing<span className="align-super text-lg ml-0.5">™</span>
                    </h2>
                    <div className="relative lg:hidden my-5">
                        <Image src={"/img/img_10.png"} alt={"Aziz sitting"} width={542} height={596} className="relative z-1"/>
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
                    <p className="font-light text-lg max-w-[667px] mt-5">Samuel Aziz Boubaous is a German entrepreneur and the mastermind behind leading nine-figure e-commerce companies that took over the fitness industry in the last years, supported by a team of over 100 employees.</p>
                    <p className="font-inter font-light text-lg max-w-[667px] mt-5 text-whitisch">He experienced the struggles of payment processing and banking first hand when scaling in international markets like the US, Europe and Asia.</p>
                    <p className="font-inter font-light text-lg max-w-[667px] my-5 text-whitisch">A recent article on Forbes describes how he got into payment processing as well as his vision to build his own bank and fintech unicorn, that focuses on righteous values and principles which uplift society and inspires millions worldwide.</p>
                    <p className="lg:hidden text-lg text-whitisch">
                        <span className="font-bold text-white">@Samuel Aziz Boubaous</span> — Founder of Private
                        Processing™</p>
                </div>
                <div className="relative max-lg:hidden -translate-y-10">
                    <Image src={"/img/img_10.png"} alt={"Aziz sitting into the cat"} width={542} height={596} className="relative z-1"/>
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
                    <p className="absolute bottom-0 p-5 text-lg max-w-[400px] z-1"><span
                        className="font-bold text-white">@Samuel Aziz Boubaous</span> — Founder of Private Processing™
                    </p>
                </div>
            </div>
        </section>
    )
}