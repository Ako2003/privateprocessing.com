import React from 'react';
import Image from "next/image";

function Page() {
    return (
        <div className="bg-[#040404] pt-30">
            <div className="flex items-center justify-center translate-y-22 w-11/12 mx-auto">
                <div className="text-center max-w-[620px]">
                    <div className="flex justify-center w-full mb-5">
                        <Image src={"/svg/circle-tick-golden.svg"} alt={"Golden circle tick"} width={35} height={35} />
                    </div>
                    <h2 className="text-gold !font-bold !leading-8">Thank you</h2>
                    <p className="lg:text-[40px] text-[26px] capitalize mb-3 max-md:leading-7">for completing this form</p>
                    {/*<p className="text-lg mb-3">This helps us match your business with the right payment partner. </p>*/}
                    <p className="font-bold text-lg">Once reviewed, our team will reach out with next steps for onboarding. </p>
                </div>
            </div>
        </div>
    );
}

export default Page;