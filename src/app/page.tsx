import { CarouselInfo } from "@/modules/Home/components/CarouselInfo";
import { Habilitaciones } from "@/modules/Home/components/Habilitaciones";
import { Hero } from "@/modules/Home/components/Hero";
import { Valores } from "@/modules/Home/components/Valores1";

export default function Home() {
  return (
    <main className="pt-28 lg:pt-48">
      <Hero />
      <CarouselInfo />
      <Valores />
      <Habilitaciones />
    </main>
  );
}

// px-4 md:px-28 2xl:px-80
