import Image from "next/image";

export default function Section2() {
    return (
        <section className="pt-20 mt-20" id="solutions">
            <div className="max-w-[800px] mx-auto text-center w-11/12">
                <p className="lg:text-[52px] text-[40px] max-lg:leading-12 tracking-tighter font-light">All your <span className="text-gold font-medium font-manrope">Information in one place</span>
                </p>
                <p className="text-[#ACAFB9] text-[20px] mt-3 !tracking-[-0.38px]">Say goodbye to endless KYC. Once your profile is created
                    on the platform, you can apply to multiple processors with one click.</p>
            </div>
            <div className="mt-10">
                <div className="relative w-fit mx-auto w-11/12 mx-auto max-lg:hidden">
                    <Image className="w-fit mx-auto" src="/img/img_12.png" alt="Card Images" width={1152} height={873}/>
                </div>
            </div>

            <div className="mt-10 w-11/12 mx-auto lg:hidden">
                <Image className="w-fit mx-auto" src="/img/img_15.png" alt="Brand Images" width={570} height={443}/>
            </div>
            <div className="mt-10 w-11/12 mx-auto lg:hidden">
                <Image className="w-fit mx-auto" src="/img/img_16.png" alt="Brand Images" width={570} height={443}/>
            </div>
            <div className="mt-10 w-11/12 mx-auto lg:hidden">
                <Image className="w-fit mx-auto" src="/img/img_17.png" alt="Brand Images" width={570} height={443}/>
            </div>
        </section>
    )
}

