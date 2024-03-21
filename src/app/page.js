
import HeroSection from "@/components/Home/HeroSection";
import HeroSectionDescription from "@/components/Home/HeroSectionDescription";
import HomeGrid from "@/components/Home/HomeGrid";

import Project from "@/components/Home/Project";
import Slider from "@/components/Home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <HeroSection/>
     <HeroSectionDescription/>
     <Project/>
     <HomeGrid/>
     <Slider/>
    </main>
  );
}
