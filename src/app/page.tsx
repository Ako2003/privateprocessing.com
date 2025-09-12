import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Section1 from "@/components/main/Section1";
import Section2 from "@/components/main/Section2";
import Section3 from "@/components/main/Section3";
import Section4 from "@/components/main/Section4";
import Section5 from "@/components/main/Section5";
import Section6 from "@/components/main/Section6";

export default function Home() {
  return (
      <main >
        <div>
            <Navbar />
            <Hero />
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
  );
}
