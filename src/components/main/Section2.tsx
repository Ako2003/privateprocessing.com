import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import ArrowText from "@/components/main/ArrowText";

export default function Section2() {
    return (
        <section className="mt-20">
            <div className="max-w-[800px] mx-auto text-center">
                <p className="text-[52px]">All your <span className="text-gold font-medium">Information in one place</span></p>
                <p className="text-[20px]">Say goodbye to endless KYC. Once your profile is created on the platform, you can apply to multiple processors with one click.</p>
            </div>
            <div className="mt-10">
                <Image className="w-fit mx-auto" src="/img/img_5.png" alt="Card Images" width={1152} height={873} />
            </div>
        </section>
    )
}

