import ServicesCard from "./Components/CardService/ServicesCard";
import { DescriptionService } from "./Components/DescripcionService";

export default function ServiciosModule() {
  return (
    <div className="pt-28 container mx-auto">
      <DescriptionService />
      <ServicesCard />
    </div>
  );
}
