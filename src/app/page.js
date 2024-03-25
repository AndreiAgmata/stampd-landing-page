import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import HeroShapes from "@/components/Shapes/HeroShapes/HeroShapes";
import Overview from "@/components/Overview/Overview";
import Features from "@/components/Features/Features";
import Steps from "@/components/Steps/Steps";
import Faqs from "@/components/Faqs/Faqs";
import Footer from "@/components/Footer/Footer";
import Marquee from "@/components/Marquee/Marquee";
import GetTheAppBtn from "@/components/GetTheAppBtn/GetTheAppBtn";

export default function Home() {
  return (
    <main>
      <HeroShapes />

      <Hero />
      <Overview />
      <Steps />
      <Features />
      {/* <Marquee /> */}
      <Faqs />
      <GetTheAppBtn />
      <Footer />
    </main>
  );
}
