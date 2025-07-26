import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="bg-neutral-bg">
      <Hero />
      <ProductGrid />
    </div>
  );
}
