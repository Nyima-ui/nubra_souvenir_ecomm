import Header from "./components/Header";
import FavoriteGrid from "./components/FavoriteGrid";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductGrid from "./components/ProductGrid";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Owner from "./components/Owner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-bg">
      <Header />  
      {/* above is mobile header  */}
      <Hero />
      {/* desktop header is inside the hero  */}
      <ProductGrid />
      <Marquee />
      <FavoriteGrid />
      <Location />
      <Gallery />
      <Owner />
      <Footer />
    </div>
  );
}
