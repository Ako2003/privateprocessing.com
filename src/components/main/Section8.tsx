import ArrowText from "@/components/main/ArrowText";
import EmblaCarousel from "@/components/main/carousel/EmblaCarousel";
import "@/app/embla.css"
import CustomButton from "@/components/CustomButton";

const cards = [
    {title:"Starter Processing ", image: "img.png", number: "250K-500K", color: "GREEN", circleColor: "#0C220C"},
    {title:"Advanced Processing ", image: "img_1.png", number: "500K-1M", color: "GOLD", circleColor: "#7C601A"},
    {title:"Expert Processing ", image: "img_2.png", number: "1M-10M", color: "PLATINUM", circleColor: "#B8B7B7"},
    {title:"Elite Processing", image: "img_3.png", number: "10M-100M", color: "BLACK", circleColor: "#000000"},
]


export default function Section8(){
    return (
        <section className="lg:mt-52.5 mt-35">
            <div className="relative max-w-[1200px] mx-auto w-11/12">
                <div>
                    <ArrowText title={"Requirements clients need to fulfill"}/>
                    <h2 className="lg:!text-[38px] text-balance">
                        Private Processing <span className="text-gold font-semibold">Client Tiers</span>
                    </h2>
                </div>

                <div className="lg:mt-12.5 mt-5">
                    <EmblaCarousel slides={cards} />
                </div>
                <CustomButton className="max-lg:hidden mt-5"/>

            </div>
        </section>
    )
}