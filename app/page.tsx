import { LightboxProvider } from "@/components/Lightbox";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import BrandStory from "@/components/BrandStory";
import KindWords from "@/components/KindWords";
import VisitContact from "@/components/VisitContact";
import Footer from "@/components/Footer";
import Fabs from "@/components/Fabs";

export default function Home() {
  return (
    <LightboxProvider>
      <Loader />
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <BrandStory />
        <KindWords />
        <VisitContact />
      </main>

      <Footer />
      <Fabs />
    </LightboxProvider>
  );
}
