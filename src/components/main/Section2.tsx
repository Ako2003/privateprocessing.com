import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";
import ArrowText from "@/components/main/ArrowText";

export default function Section1() {
    return (
        <section className="mt-25">
            <div className="relative w-full bg-[url('/img/img_1.png')] h-[660px] bg-cover bg-no-repeat bg-[position:75%_25%]
 ">
                <div
                    className="max-lg:hidden absolute inset-0 -translate-x-[35%]"
                    style={{
                        background:
                            "linear-gradient(270.04deg, rgba(0, 0, 0, 0) 3.05%, #000000 34.03%)",
                    }}
                />
                <div className="bg-black/60 absolute inset-0 lg:hidden"/>

                <div className="relative z-0 flex flex-col justify-between h-full  max-w-[1400px] mx-auto w-11/12 py-15">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <Image src={"svg/arrows/white-arrow-down.svg"} alt={"White Arrow Down"} width={40}
                                   height={40}/>
                        </div>
                        <div>
                            <p className="capitalize text-xl">Think <span
                                className="text-gold font-extrabold uppercase">private</span>. Think <span
                                className="text-gold font-extrabold uppercase">exclusive</span>. Think <span
                                className="text-gold font-extrabold uppercase">stability</span>.</p>
                            <p className="text-[#D5D5D5]/70 font-inter text-base">We protect what keeps you and your
                                business alive</p>
                        </div>
                    </div>

                    <div>
                        <ArrowText title={"private processing™"}/>
                        <h3 className="max-w-[440px] mb-6">Experience the private banking of payment processing</h3>
                        <CustomButton />
                    </div>
                </div>
            </div>
        </section>
    )
}

