import { FramerComponent } from "@/shared/Framer/FramerComponent";
import ServicesCard from "./Components/CardService/ServicesCard";
import { DescriptionService } from "./Components/DescripcionService";

export default function ServiciosModule() {
  return (
    <FramerComponent
      style="container mx-auto px-4 py-28 "
      animationInitial={{ y: 100, opacity: 0 }}
      animationWhileInView={{ y: 0, opacity: 1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Ensayos no Destructivos
      </h1>

      <DescriptionService />
      <ServicesCard />
    </FramerComponent>
  );
}
