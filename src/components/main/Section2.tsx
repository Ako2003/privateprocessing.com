import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import ArrowText from "@/components/main/ArrowText";

export default function Section1() {
    return (
        <section className="lg:mt-50 mt-35">
            <div className="relative flex items-start gap-x-2 mb-10 lg:hidden mx-auto w-11/12">
                <div className="mt-2 max-lg:hidden">
                    <Image src={"svg/arrows/white-arrow-down.svg"} alt={"White Arrow Down"} width={40}
                           height={40}/>
                </div>
                <div>
                    <p className="capitalize text-lg">Think <span
                        className="text-gold font-extrabold uppercase">private</span>. Think <span
                        className="text-gold font-extrabold uppercase">exclusive</span>. Think <span
                        className="text-gold font-extrabold uppercase">stability</span>.</p>
                    <p className="text-[#D5D5D5]/70 font-inter text-base">We protect what keeps you and your
                        business alive</p>
                </div>
            </div>
            <div className="relative w-full bg-[url('/img/img_1.png')] lg:h-[600px] h-[400px] bg-cover bg-no-repeat bg-[position:75%_25%] max-w-[1440px] mx-auto">
                <div
                    className="max-lg:hidden absolute inset-0 -translate-x-[35%]"
                    style={{
                        background:
                            "linear-gradient(270.04deg, rgba(0, 0, 0, 0) 3.05%, #000000 34.03%)",
                    }}
                />
                <div
                    className="max-lg:hidden absolute right-0 translate-x-[35%] w-full h-[660px]"
                    style={{
                        background: "linear-gradient(180.68deg, rgba(0, 0, 0, 0) 0.59%, #000000 88.24%)",
                        transform: "matrix(0, 1, 1, 0, 0, 0)",

                    }}
                />

                <div className="absolute inset-0 w-full h-full z-0" style={{
                    background: "linear-gradient(189.39deg, rgba(0, 0, 0, 0) 45.37%, #000000 90.56%)",
                    // transform: "rotate(-90deg)",
                }}/>


                <div
                    className="relative z-0 flex flex-col justify-between h-full  max-w-[1200px] mx-auto w-11/12 py-15 max-lg:hidden">
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
                        <h3 className="max-w-[500px] mb-6 text-balance">Experience the private banking of payment processing</h3>
                        <CustomButton/>
                    </div>
                </div>

            </div>
            <div className="mt-10 lg:hidden mx-auto w-11/12 -translate-y-20">
                <ArrowText title={"private processing™"}/>
                <h3 className="max-w-[440px] mb-6 capitalize">Experience the private banking of payment processing</h3>
                <CustomButton/>
            </div>
        </section>
    )
}

