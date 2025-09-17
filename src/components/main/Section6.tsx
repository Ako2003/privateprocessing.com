import Image from "next/image";
import ArrowText from "@/components/main/ArrowText";

export default function Section6() {
    return(
        <section className="lg:pt-30 lg:mt-20 pt-25" id="shared-values">
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-between gap-x-20 mx-auto max-w-[1200px] w-11/12">
                <div>
                    <ArrowText title={"shared values"} />
                    <h2 className="lg:!text-[38px] max-w-[555px]">
                        What Private Processing<span className="align-super text-lg ml-0.5">™</span> <span
                        className="text-gold capitalize font-bold">Clients</span> have in common
                    </h2>
                    <p className="font-semibold text-lg max-w-[470px] mt-5">Private Processing™ clients are used to excellent service.</p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">They value their time more than money and understand that they don’t need to be an expert in every field themselves.</p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">Instead they enjoy working with smart people and building a network of elite entrepreneurs with whom they can collaborate. </p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">They make fast decisions, know what they want and are not afraid of spending money</p>
                </div>
                <div className="relative">
                    <Image src={"/img/img_5.png"} alt={"Aziz sitting into the cat"} width={520} height={540}/>
                    <div className="lg:hidden absolute h-[286px] w-full bottom-0"
                         style={{
                             background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 57.08%)",
                         }}
                    />
                </div>
            </div>
        </section>
    )
}