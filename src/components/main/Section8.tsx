import ArrowText from "@/components/main/ArrowText";
import EmblaCarousel from "@/components/main/carousel/EmblaCarousel";
import "@/app/embla.css"
import CustomButton from "@/components/main/CustomButton";

const cards = [
    {title:"Starter Processing ", image: "img.png", number: "250K-500K"},
    {title:"Advanced Processing ", image: "img_1.png", number: "500K-1M"},
    {title:"Expert Processing ", image: "img_2.png", number: "1M-10M"},
    {title:"Private Processing", image: "img_3.png", number: "10M-100M"},
]


export default function Section8(){
    return (
        <section className="lg:mt-52.5 mt-35">
            <div className="relative max-w-[1400px] mx-auto w-11/12">
                <div>
                    <ArrowText title={"Requirements clients need to fulfill"}/>
                    <h2 className="!text-[38px]">
                        Private Processing <span className="text-gold font-semibold">Client Tiers</span>
                    </h2>
                </div>

                <div className="mt-12.5">
                    <EmblaCarousel slides={cards} />
                </div>
                <CustomButton className="max-lg:hidden mt-5"/>

            </div>
        </section>
    )
}