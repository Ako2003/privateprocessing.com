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
        <section className="lg:mt-50 mt-35">
            <div className="max-w-[1400px] mx-auto w-11/12">
                <div>
                    <ArrowText title={"We make business human"}/>
                    <h2 className="!text-[38px]">
                        <span className="text-gold font-semibold">Values</span> we share with our clients
                    </h2>
                </div>

                <div
                    className="
                        grid grid-cols-1 lg:grid-cols-3 gap-y-20 mt-10
                        [&>*]:lg:max-w-[262px] [&>*]:w-full
                        lg:[&>*]:justify-self-center
                        lg:[&>*:nth-child(3n+1)]:justify-self-start
                        lg:[&>*:nth-child(3n)]:justify-self-end
                      "
                >
                    {points.map((point, i) => (
                        <div key={i}>
                            <div className="relative">
                                <Image src={`/svg/${point.icon}`} alt={point.title} width={42} height={42}/>
                            </div>
                            <h4 className="mt-2 capitalize !text-[20px]">{point.title}</h4>
                            <p className="font-inter font-light text-whitisch">{point.description}</p>
                        </div>
                        ))}

                    {/* Button as the last element in row 2, right side */}
                    <div className="lg:col-start-3 lg:row-start-2 lg:justify-self-end self-end">
                        <CustomButton />
                    </div>
                </div>
            </div>
        </section>
    )
}