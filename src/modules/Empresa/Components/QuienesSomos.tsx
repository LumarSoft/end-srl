"use client";
import Image from "next/image"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { FramerComponent } from "@/shared/Framer/FramerComponent";
import personas from "./personas.js";

export const QuienesSomos = () => {
  return (
    <section className="flex flex-col pt-10 w-full gap-16 max-w-7xl mx-auto px-4 lg:px-8 mb-20 mt-5">
      <FramerComponent
        style="flex flex-col gap-4 items-center"
        animationInitial={{ opacity: 0, y: 50 }}
        animationAnimate={{ opacity: 1, y: 0 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h2 className="text-2xl lg:text-4xl max-w-3xl text-center font-bold">
          QUIENES SOMOS
        </h2>
      </FramerComponent>
      <CarouselComponent />
    </section>
  );
};

const CarouselComponent = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <FramerComponent
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <CarouselContent className="-ml-4">
          {personas.map((person, i) => (
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3" key={i}>
              <FramerComponent
                style="p-1"
                animationInitial={{ opacity: 0, y: 50 }}
                animationVariants={itemAnimado}
              >
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col gap-4 items-center">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={160}
                        height={160} 
                        className="rounded-full"
                      />
                      <h4 className="text-lg font-semibold">{person.name}</h4>
                      <p className="text-sm font-medium text-primary">
                        {person.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FramerComponent>
            </CarouselItem>
          ))}
        </CarouselContent>
      </FramerComponent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
};
