"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FramerComponent } from "@/shared/Framer/FramerComponent";
import Autoplay from "embla-carousel-autoplay";

export function CarouselInfo() {
  const slides = [
    {
      src: "/carousel1.jpg",
      title: "Quienes somos",
      text: "Nacio en 1999, de la mano de juan carlos monsalvo. Hoy, con casi 20 años de experiencia, se posiciona como punta en servicios aeronáuticos.",
    },
    {
      src: "/carousel2.jpg",
      title: "Ensayos no productivos",
      text: "Brinda trabajos y servicios de excelencia en todo lo referente a ensayos no destructivos y mantenimiento de estructuras de aeronaves.",
    },
    {
      src: "/carousel3.jpg",
      title: "Calidad y construccion",
      text: "Cuenta con profesionales altamente capacitados en las diferentes técnicas de reparación aeronáutica, como las corrientes inducidas, los líquidos penetrantes o las partículas magnetizables.",
    },
  ];
  return (
    <FramerComponent
      style="flex flex-col items-center justify-center w-full my-20 px-4 md:px-28 2xl:px-80"
      animationInitial={{ y: 100, opacity: 0 }}
      animationWhileInView={{ y: 0, opacity: 1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
    >
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <div>
                  <p className="text-4xl font-bold md:text-5xl text-primary">
                    {slide.title}
                  </p>
                  <p className="">{slide.text}</p>
                </div>
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[600px] object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </FramerComponent>
  );
}
