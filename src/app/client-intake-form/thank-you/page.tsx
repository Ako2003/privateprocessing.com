import React from 'react';
import Image from "next/image";

function Page() {
    return (
        <div className="bg-[#040404] pt-30">
            <div className="relative flex items-center justify-center h-screen -translate-y-32">
                <div className="max-lg:hidden absolute -z-1 translate-y-32 -right-20 h-[calc(100vh+200px)] w-full">
                    <Image src={"/svg/backgrounds/bg1.svg"} alt={"Background Image"} fill
                           />
                    <div className="absolute max-lg:bottom-30 bottom-0 h-[709px] w-full" style={{
                        background: "linear-gradient(180deg, rgba(10, 10, 10, 0) 11.27%, rgba(10, 10, 10, 0.9) 81.87%, rgba(0, 0, 0, 0.95) 95.56%)",
                    }}/>
                </div>
                <div className="text-center max-w-[620px] w-11/12 mx-auto">
                    <div className="flex justify-center w-full mb-5">
                        <Image src={"/svg/circle-tick-golden.svg"} alt={"Golden circle tick"} width={35} height={35}/>
                    </div>
                    <h2 className="text-gold !font-bold !leading-8">Thank you</h2>
                    <p className="lg:text-[40px] text-[26px] capitalize mb-3 max-md:leading-7">for completing this
                        form</p>
                    {/*<p className="text-lg mb-3">This helps us match your business with the right payment partner. </p>*/}
                    <p className="font-bold text-lg">Once reviewed, our team will reach out with next steps for
                        onboarding. </p>
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                        <div className="flex items-center justify-center gap-5 max-md:mb-10 max-lg:hidden">
                            <a
                                href="https://wa.me/971528072627"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-inter font-medium text-base text-[#9194A1]"
                            >
                                <Image src={"/svg/social-media/whatsapp.svg"} alt={"Whatsapp Icon"} width={20}
                                       height={20} className="opacity-60"/>
                            </a>
                            <a href="https://www.instagram.com/samuel.aziz.boubaous?igsh=dnFvY2E2N3YyZmty">
                                <Image src={"/svg/social-media/instagram.svg"} alt={"Instagram Icon"} width={20}
                                       height={20} className="opacity-60"/>
                            </a>
                            <a href="https://www.youtube.com/@samuelazizbusiness">
                                <Image src={"/svg/social-media/youtube.svg"} alt={"Youtube Icon"} width={26} height={20}
                                       className="opacity-60"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;