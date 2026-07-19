import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { Letter } from "@/components/Letter";
import { Ending } from "@/components/Ending";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Timeline />
      <Gallery />
      <Letter />
      <Ending />
      <Footer />
    </main>
  );
}
