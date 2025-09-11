import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/main/CustomButton";

const menu = [
    {title: "Private processing solution", url: "#private-processing-solution"},
    {title: "Mission", url: "#mission"},
    {title: "Shared values", url: "#shared-values"},
    {title: "Awards", url: "#awards"},
]

export default function Navbar(){
    return(
        <nav className="py-4 bg-black">
            <div className="flex items-center justify-between max-w-[1400px] mx-auto w-11/12">
                <div>
                    <Link href="/public">
                        <Image src="/svg/logo.svg" alt={"Private Processing Logo"} width={153} height={48}/>
                    </Link>
                </div>

                <div className="flex gap-x-6">
                    {menu.map((item, index) => (
                        <div key={index}>
                            <Link href={item.url} className="font-normal text-xs uppercase">{item.title}</Link>
                        </div>
                    ))}
                </div>

                <CustomButton />
            </div>
        </nav>
    )
}