import Image from "next/image";

export default function Section2() {
    return (
        <section className="pt-20 lg:mt-20" id="solutions">
            <div className="max-w-[800px] mx-auto text-center w-11/12">
                <p className="lg:text-[52px] text-[32px] lg:leading-12 leading-10 tracking-tighter font-light">All
                    your <span className="text-gold font-medium font-manrope">Information in one place</span>
                </p>
                <p className="text-[#ACAFB9] lg:text-[20px] text-[18px] max-lg:font-light mt-5 !tracking-[-0.38px]">Say
                    goodbye to endless KYC. Once your profile is created
                    on the platform, you can apply to multiple processors with one click.</p>
            </div>
            <div className="mt-10">
                <div className="relative w-fit mx-auto w-11/12 mx-auto max-lg:hidden">
                    <Image className="w-fit mx-auto" src="/img/img_12.png" alt="Card Images" width={1152} height={873}/>
                </div>
            </div>

            {/* Card 1 */}
            <div
                className="mt-10 w-11/12 mx-auto lg:hidden relative bg-[url('/img/img_24.png')] bg-center bg-cover rounded-lg">
                <Image className="w-full sm:h-130 h-105" src="/img/img_23.png" alt="Brand Images" width={670}
                       height={443}/>
                <div className="absolute top-10 px-4">
                    <Image className="w-fit mx-auto" src="/img/img_22.png" alt="Brand Images" width={570}
                           height={443}/>
                </div>
                <div className="absolute bottom-0 w-full" style={{
                    height: "258px",
                    background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, rgba(46, 42, 38, 0.45121) 16.61%, #2E2A26 57.38%)",
                }}/>
                <div className="absolute bottom-10 px-4">
                    <p className="font-semibold text-lg ">Structured Profile Setup</p>
                    <p className="text-base text-[#acafb9]">Complete your business profile step by step — from
                        communication details to company structure — all in one secure workspace.</p>
                </div>
            </div>

            {/* Card 2 */}
            <div
                className="mt-10 w-11/12 mx-auto lg:hidden relative bg-[url('/img/img_26.png')] bg-center bg-cover rounded-lg">
                <Image className="w-full sm:h-130 h-105" src="/img/img_23.png" alt="Brand Images" width={670}
                       height={443}/>
                <div className="absolute top-10 px-4">
                    <Image className="w-fit mx-auto" src="/img/img_25.png" alt="Brand Images" width={570}
                           height={443}/>
                </div>
                <div className="absolute bottom-0 w-full" style={{
                    height: "258px",
                    background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, rgba(46, 42, 38, 0.45121) 16.61%, #2E2A26 57.38%)",
                }}/>
                <div className="absolute bottom-10 px-4">
                    <p className="font-semibold text-lg ">Companies & Brands Overview</p>
                    <p className="text-base text-[#acafb9]">Manage operating companies and connected brands in one dashboard, with real-time readiness status for each entity.</p>
                </div>
            </div>

            {/* Card 3 */}
            <div
                className="mt-10 w-11/12 mx-auto lg:hidden relative bg-[url('/img/img_28.png')] bg-center bg-cover rounded-lg">
                <Image className="w-full sm:h-130 h-105" src="/img/img_23.png" alt="Brand Images" width={670}
                       height={443}/>
                <div className="absolute top-0 px-4">
                    <Image className="w-fit mx-auto" src="/img/img_27.png" alt="Brand Images" width={570}
                           height={443}/>
                </div>
                <div className="absolute bottom-0 w-full" style={{
                    height: "258px",
                    background: "linear-gradient(180deg, rgba(46, 42, 38, 0) 0%, rgba(46, 42, 38, 0.45121) 16.61%, #2E2A26 57.38%)",
                }}/>
                <div className="absolute bottom-10 px-4">
                    <p className="font-semibold text-lg ">Everything in one place</p>
                    <p className="text-base text-[#acafb9]">Your data is stored in one place so you don’t need to send it over and over again to different processors.</p>
                </div>
            </div>
        </section>
    )
}

