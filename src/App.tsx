import CTA from "./components/sections/CTA/CTA";
import Experience from "./components/sections/Experience/Experience";
import Features from "./components/sections/Features/Features";
import Hero from "./components/sections/Hero/Hero";

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Experience />
      <Features />
      <CTA />
    </div>
  );
}

export default App;