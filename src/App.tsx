import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Capturas from "./components/Capturas";
import Funciones from "./components/Funciones";
import ParaQuien from "./components/ParaQuien";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <NavBar />
      <main>
        <Hero />
        <Problema />
        <Capturas />
        <Funciones />
        <ParaQuien />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
