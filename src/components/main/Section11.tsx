import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Section11(){
    return (
        <section className="lg:mt-50 mt-25">
            <div className="flex lg:flex-row flex-col-reverse gap-10 items-center gap-x-40 mx-auto max-w-[1200px] w-11/12">
                <div className="max-lg:hidden">
                    <Image src={"/img/img_9.png"} alt={"Aziz sitting into the cat"} width={520} height={540}/>
                </div>
                <div>
                    <ArrowText title={"Private Processing Connections™"}/>
                    <h2 className="max-w-[470px] lg:!text-[38px] mb-5">
                        <span
                            className="text-gold capitalize font-semibold">Geneva. Monaco. Dubai. Istanbul. Singapore.</span>
                    </h2>
                    <p className="font-semibold text-lg max-w-[470px] mt-5">Private Processing™ is the rising high level
                        community of e-commerce millionaires and billionaires.</p>
                    <div className="lg:hidden mt-5">
                        <Image src={"/img/img_9.png"} alt={"Aziz sitting into the cat"} width={520} height={540}/>
                    </div>
                    <p className="font-inter font-light text-lg max-w-[470px] text-whitisch">Private Processing™ is
                        the rising high level community of e-commerce millionaires and billionaires.</p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">With an upcoming
                        series of connection events in the most exclusive locations around the world.</p>
                    <p className="font-inter font-light text-lg max-w-[470px] mt-5 text-whitisch">We create human
                        relationships that last a lifetime.</p>
                    <CustomButton className="mt-8" text="Start for free"/>
                </div>
            </div>
        </section>
    )
}