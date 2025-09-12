import ArrowText from "@/components/main/ArrowText";
import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";

const points = [
    {icon: "human-relationships.svg", title:"Human relationships", description: "We believe that in a digital world human relationship and strong partnerships are more valuable and needed than ever before."},
    {icon: "exclusive-support.svg", title:"Exclusive Support", description: "Our clients don’t have time to waste. Which is why we provide exclusive support and 1:1 partnerships for a lifetime."},
    {icon: "community.svg", title:"Community", description: "Through our work we build a community of like-minded elite entrepreneurs that fight for good and share similar values."},
    {icon: "loyalty-and-trust.svg", title:"Loyalty and trust", description: "We seek partnerships which are built on a strong foundation of loyalty and trust."},
    {icon: "righteousness.svg", title:"Righteousness", description: "We seek partnerships which are built on a strong foundation of loyalty and trust."},
]

export default function Section7(){
    return(
        <section className="py-15 bg-[#101010]">
            <div className="max-w-[1400px] mx-auto w-11/12">
                <div>
                    <ArrowText title={"We make business human"}/>
                    <h2>
                        <span className="text-gold">Values</span> we share with our clients
                    </h2>
                </div>

                <div
                    className="
                        grid grid-cols-1 sm:grid-cols-3 gap-y-10 mt-10
                        [&>*]:max-w-[262px] [&>*]:w-full
                        sm:[&>*]:justify-self-center
                        sm:[&>*:nth-child(3n+1)]:justify-self-start
                        sm:[&>*:nth-child(3n)]:justify-self-end
                      "
                >
                    {points.map((point, i) => (
                        <div key={i}>
                            <Image src={`/svg/${point.icon}`} alt={point.title} width={44} height={44}/>
                            <h4 className="mt-2">{point.title}</h4>
                            <p className="font-inter font-light">{point.description}</p>
                        </div>
                    ))}

                    {/* Button as the last element in row 2, right side */}
                    <div className="sm:col-start-3 sm:row-start-2 justify-self-end self-end">
                        <CustomButton />
                    </div>
                </div>


            </div>
        </section>
    )
}