import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";

const awards = [
    { image: "img.png", color: "Bronze", price: "1"},
    { image: "img_1.png", color: "Gold", price: "10"},
    { image: "img_2.png", color: "Platinum", price: "100"},
    { image: "img_3.png", color: "Black", price: "500"},
]


export default function Section4(){
    return(
        <section className="mt-50">
            <div className="mx-auto max-w-[1400px] w-11/12">
                <div>
                    <ArrowText title={"NEW: Private Processing™ Awards"} className="justify-center" />
                    <h3 className="text-center font-normal !text-[40px] capitalize">
                        <span className="text-gold font-semibold capitalize">We Celebrate</span> Success Together
                    </h3>
                </div>

                <div className="flex flex-wrap items-center lg:justify-between justify-center mt-10 gap-10">
                    {awards.map((award, index) => (
                        <div key={index}>
                            <Image src={`/img/awards/` + award.image} alt={award.image} width={277} height={387}/>
                        </div>
                    ))}
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-between mt-10">
                    <div className="flex lg:flex-wrap max-lg:flex-col gap-3">
                        {awards.map((award, index) => (
                            <div key={index} className="border border-white/18 rounded-full px-4 py-2">
                                <p>{award.color} - ${award.price}M+</p>
                            </div>
                        ))}
                    </div>
                    <CustomButton />
                </div>
            </div>
        </section>
    )
}