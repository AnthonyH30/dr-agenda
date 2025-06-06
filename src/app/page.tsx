import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { Navigation } from "@/components/ui/navigation";
import Pricing from "@/components/ui/pricing";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Pricing />
      <Footer />
    </>
  );
}
