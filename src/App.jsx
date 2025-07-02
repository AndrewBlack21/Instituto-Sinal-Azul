import Navbar from "./components/Navbar";
import CarouselSection from "./components/CarouselSection";
import InstitutoSection from "./components/InstitutoSection";
import PrincipiosSection from "./components/PrincipiosSection";
import VisaoSection from "./components/VisaoSection";
import FazemosSection from "./components/FazemosSection";
import ModalidadeSection from "./components/ModalideSection";
import QuemsomosSection from "./components/QuemsomosSection";
import FormularioSection from "./components/FormularioSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <CarouselSection />
      <InstitutoSection />
      <sectio id="sobre"></sectio>
      <PrincipiosSection />
      <VisaoSection />
      <FazemosSection />
      <ModalidadeSection />
      <QuemsomosSection />
      <FormularioSection />
      <Footer />
    </>
  );
}
