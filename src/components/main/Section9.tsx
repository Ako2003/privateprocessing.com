import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";

export default function Section9(){
    return (
        <section className="lg:pt-30 lg:mt-20 pt-35" id="mission">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1200px] w-11/12">
                <div>
                    <ArrowText title={"mission"}/>
                    <h2 className="max-w-[600px] lg:!text-[38px] mb-5">
                        <span className="text-gold capitalize font-semibold">We are not only</span> Building a Payment-Processing Company
                    </h2>
                    <div className="lg:hidden relative mb-10">
                        <Image src={"/img/img_7.png"} alt={"Aziz sitting into the cat"} width={520} height={540}/>
                        <div className="absolute h-[286px] w-full bottom-0"
                            style={{
                                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 57.08%)",
                            }}
                        />
                    </div>

                    <p className="font-semibold text-lg max-w-[470px] mt-5">Becoming a Private Processing™ client means to never worry about payment processing again.</p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">Our mission is to build the strongest payment processing company in the world that provides the most exclusive support and customer experience to elite entrepreneurs and high-level businesses.</p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">We build a high level community of righteous entrepreneurs that fight for good, revolutionize industries and make the world a better place.</p>
                </div>
                <div className="max-lg:hidden">
                    <Image src={"/img/img_7.png"} alt={"Aziz sitting into the cat"} width={520} height={540}/>
                </div>
            </div>
        </section>
    )
}