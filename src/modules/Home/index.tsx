import { CarouselInfo } from "./components/CarouselInfo";
import { Habilitaciones } from "./components/Habilitaciones";
import { Hero } from "./components/Hero";
import { Valores } from "./components/Valores1";

export default function HomeModule() {
  return (
    <main className="pt-28 lg:pt-48">
      <Hero />
      <CarouselInfo />
      <Valores />
      <Habilitaciones />
    </main>
  );
}
