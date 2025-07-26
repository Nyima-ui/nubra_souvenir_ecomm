import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="bg-neutral-bg">
      <Hero />
      <ProductGrid />
      <Marquee />
    </div>
  );
}
