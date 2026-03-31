import Experience from "./components/sections/Experience/Experience";
import Features from "./components/sections/Features/Features";
import FooterSection from "./components/sections/Footer/FooterSection";
import Hero from "./components/sections/Hero/Hero";

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Experience />
      <Features />
      <FooterSection/>
    </div>
  );
}

export default App;