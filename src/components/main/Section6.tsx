import Image from "next/image";
import ArrowText from "@/components/main/ArrowText";

export default function Section6() {
    return(
        <section className="mt-50">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1400px] w-11/12">
                <div>
                    <ArrowText title={"shared values"} />
                    <h2 className="max-w-[555px]">
                        What Private Processing™ <span className="text-gold capitalize font-bold">Clients</span> have in common
                    </h2>
                    <p className="font-semibold text-lg max-w-[550px] mt-5">Private Processing™ clients are used to excellent service.</p>
                    <p className="font-inter font-light text-lg max-w-[550px] mt-5 text-whitisch">They value their time more than money and understand that they don’t need to be an expert in every field themselves.</p>
                    <p className="font-inter font-light text-lg max-w-[550px] mt-5 text-whitisch">Instead they enjoy working with smart people and building a network of elite entrepreneurs with whom they can collaborate. </p>
                    <p className="font-inter font-light text-lg max-w-[550px] mt-5 text-whitisch">They make fast decisions, know what they want and are not afraid of spending money</p>
                </div>
                <div>
                    <Image src={"/img/img_5.png"} alt={"Aziz sitting into the cat"} width={566} height={559}/>
                </div>
            </div>
        </section>
    )
}