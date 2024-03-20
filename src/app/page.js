import Title from "@/UI/Title";
import HeroSection from "@/components/Home/HeroSection";
import HeroSectionDescription from "@/components/Home/HeroSectionDescription";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <HeroSection/>
     <HeroSectionDescription/>
     <Title/>
    </main>
  );
}
