import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section12(){
    return (
        <section className="lg:my-50 mt-25">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1400px] w-11/12">
                <div>
                    <h2 className="max-w-[600px] !text-[38px]">
                        <span className="text-gold capitalize font-semibold">The Fouder</span><br className="max-lg:hidden"/> Of Private Processing™
                    </h2>
                    <div className="relative lg:hidden my-5">
                        <Image src={"/img/img_10.png"} alt={"Aziz sitting into the cat"} width={542} height={596}/>
                        <div className="absolute h-[286px] w-full bottom-0"
                             style={{
                                 background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 57.08%)",
                             }}
                        />
                    </div>
                    <p className="font-semibold text-lg max-w-[600px]">Samuel Aziz Boubaous is a German
                        entrepreneur and the mastermind behind leading nine-figure e-commerce companies that took over
                        the fitness industry in the last years, supported by a team of over 100 employees.</p>
                    <p className="font-inter font-light text-lg max-w-[600px] mt-5 text-whitisch">He experienced the
                        struggles of payment processing and banking first hand when scaling in international markets
                        like the US, Europe and Asia.</p>
                    <p className="font-inter font-light text-lg max-w-[600px] my-5 text-whitisch">A recent article on
                        Forbes describes how he got into payment processing as well as his vision to build his own bank
                        and fintech unicorn, that focuses on righteous values and principles which uplift society and
                        inspires millions worldwide.</p>
                    <a target="_blank" href="https://www.youtube.com/@samuelazizbusiness" className="lg:hidden text-lg text-whitisch">
                        <span className="font-bold text-white">@Samuel Aziz Boubaous</span> — Founder of Private
                        Processing™</a>
                </div>
                <div className="relative max-lg:hidden">
                    <Image src={"/img/img_10.png"} alt={"Aziz sitting into the cat"} width={542} height={596}/>
                    <a target="_blank" href="https://www.youtube.com/@samuelazizbusiness" className="absolute bottom-0 p-5 text-lg max-w-[400px] text-whitisch"><span
                        className="font-bold text-white">@Samuel Aziz Boubaous</span> — Founder of Private Processing™
                    </a>
                </div>
            </div>
        </section>
    )
}