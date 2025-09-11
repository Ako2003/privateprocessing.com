import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Section1 from "@/components/main/Section1";

export default function Home() {
  return (
      <main className="space-y-30">
        <div>
            <Navbar />
            <Hero />
        </div>
        <Section1 />
      </main>
  );
}
