import Image from "next/image";

export default function Section1() {
    return (
        <section className="mt-25 relative z-10">
            <div className="max-w-[1400px] mx-auto w-11/12">
                <div className="flex lg:flex-row flex-col gap-10 items-center justify-between">
                    <div className="max-lg:hidden">
                        <Image src={"/img/img.png"} alt={"Aziz reading a newspaper"} width={574} height={603}/>
                    </div>
                    <div className="max-w-[700px]">
                        <h1 className="capitalize"><span
                            className="text-gold capitalize font-bold">private processing™</span> <br/>
                            The first class experience of payment processing
                        </h1>
                        <div className="lg:hidden mt-5 relative">
                            <Image src={"/img/img.png"} alt={"Aziz reading a newspaper"} width={574} height={603}/>
                            <div className="absolute h-[286px] w-full bottom-0"
                                 style={{
                                     background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 57.08%)",
                                 }}
                            />
                        </div>
                        <p className="font-semibold text-lg mt-5">Imagine having a personal Private Processing Manager
                            on your side.</p>
                        <p className="font-inter font-light text-lg max-w-[550px] mt-5 text-[#9194a1]">Someone that
                            takes care of everything and can solve any challenge in payment processing for you.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}