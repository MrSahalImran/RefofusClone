import LocomotiveScroll from "locomotive-scroll";
import BlackBottomBar from "./sections/BlackBottomBar";
import Cards from "./sections/Cards";
import Footer from "./sections/Footer";
import Marquees from "./sections/Marquees";
import Navbar from "./sections/Navbar";
import Products from "./sections/Products";
import Stripes from "./sections/Stripes";
import Stripe from "./sections/Stripes";
import Work from "./sections/Work";

export default function App() {
  const locomotiveScroll=new LocomotiveScroll();
  return (
    <div className="w-full h-full font-['works sans'] bg-zinc-950 text-white">
      <Navbar />
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
      <BlackBottomBar/>
    </div>
  )
}