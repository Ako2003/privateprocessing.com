import Hero from "@/components/main/Hero";
import Section1 from "@/components/main/Section1";
import Section2 from "@/components/main/Section2";
import Section3 from "@/components/main/Section3";
import Section4 from "@/components/main/Section4";
import Section5 from "@/components/main/Section5";
import Section6 from "@/components/main/Section6";
import Section7 from "@/components/main/Section7";
import Section8 from "@/components/main/Section8";
import Section9 from "@/components/main/Section9";
import Section10 from "@/components/main/Section10";
import Section11 from "@/components/main/Section11";
import Section12 from "@/components/main/Section12";

export default function Home() {
  return (
      <main className="bg-black overflow-hidden">
        <Hero />
        <Section1 />
        <Section2 />
        {/*<Section3 />*/}
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </main>
  );
}
