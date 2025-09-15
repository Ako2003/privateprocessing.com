import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section12(){
    return (
        <section className="my-25">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1400px] w-11/12">
                <div>
                    <h2 className="max-w-[600px]">
                        <span className="text-gold capitalize font-semibold">The Fouder</span><br />
                        Of Private Processing™
                    </h2>
                    <p className="font-semibold text-lg max-w-[600px] mt-5">Samuel Aziz Boubaous is a German entrepreneur and the mastermind behind leading nine-figure e-commerce companies that took over the fitness industry in the last years, supported by a team of over 100 employees.</p>
                    <p className="font-inter font-light text-lg max-w-[600px] mt-5">He experienced the struggles of payment processing and banking first hand when scaling in international markets like the US, Europe and Asia.</p>
                    <p className="font-inter font-light text-lg max-w-[600px] mt-5">A recent article on Forbes describes how he got into payment processing as well as his vision to build his own bank and fintech unicorn, that focuses on righteous values and principles which uplift society and inspires millions worldwide.</p>
                </div>
                <div className="relative">
                    <Image src={"/img/img_10.png"} alt={"Aziz sitting into the cat"} width={542} height={596}/>
                    <p className="absolute bottom-0 p-5 text-lg max-w-[400px]"><span className="font-bold">@Samuel Aziz Boubaous</span> — Founder of Private Processing™</p>
                </div>
            </div>
        </section>
    )
}