import Navbar from "./sections/Navbar";
import Stripes from "./sections/Stripes";
import Stripe from "./sections/Stripes";
import Work from "./sections/Work";

export default function App() {
  return (
    <div className="w-full h-full font-['works sans'] bg-zinc-950 text-white">
      <Navbar />
      <Work/>
      <Stripes/>
    </div>
  )
}