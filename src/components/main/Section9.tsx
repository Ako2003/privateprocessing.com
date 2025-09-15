import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section9(){
    return (
        <section className="mt-25">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1400px] w-11/12">
                <div>
                    <ArrowText title={"mission"}/>
                    <h2 className="max-w-[600px]">
                        <span className="text-gold capitalize font-semibold">We are not only</span> Building a Payment-Processing Company
                    </h2>
                    <p className="font-semibold text-lg max-w-[600px] mt-5">Becoming a Private Processing™ client means to never worry about payment processing again.</p>
                    <p className="font-inter font-light text-lg max-w-[600px] mt-5">Our mission is to build the strongest payment processing company in the world that provides the most exclusive support and customer experience to elite entrepreneurs and high-level businesses.</p>
                    <p className="font-inter font-light text-lg max-w-[600px] mt-5">We build a high level community of righteous entrepreneurs that fight for good, revolutionize industries and make the world a better place.</p>
                </div>
                <div>
                    <Image src={"/img/img_7.png"} alt={"Aziz sitting into the cat"} width={566} height={559}/>
                </div>
            </div>
        </section>
    )
}