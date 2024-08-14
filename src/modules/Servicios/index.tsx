import ServicesCard from "./Components/CardService/ServicesCard";
import { DescriptionService } from "./Components/DescripcionService";

export default function ServiciosModule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Ensayos no Destructivos
      </h1>

      <DescriptionService />
      <ServicesCard />
    </div>
  );
}
