"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FramerComponent } from "@/shared/Framer/FramerComponent";
import Autoplay from "embla-carousel-autoplay";

export default function OneServiceModule({ data }: { data: any }) {
  return (
    <FramerComponent
      animationInitial={{ y: -100, opacity: 0 }}
      animationWhileInView={{ y: 0, opacity: 1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
      style="w-full px-4 md:px-28 2xl:px-80 mx-auto py-28 md:py-28"
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{data.title}</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {data.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-20 md:mb-14">
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
              Método
            </h3>
            <p className="">{data.cards[0]}</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
              Aplicación
            </h3>
            <p className="">{data.cards[1]}</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
              Ventajas
            </h3>
            <p className="">{data.cards[2]}</p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
              Desventajas
            </h3>
            <p className="">{data.cards[3]}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-14">
          <div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1">
                  <CheckIcon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {data.items[0]}
                  </h3>
                  <p className="text-muted-foreground">{data.items_desc[0]}</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1">
                  <CheckIcon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {data.items[1]}
                  </h3>
                  <p className="text-muted-foreground">{data.items_desc[1]}</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1">
                  <CheckIcon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {data.items[2]}
                  </h3>
                  <p className="text-muted-foreground">{data.items_desc[2]}</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
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
              <CarouselContent>
                <CarouselItem>
                  <img
                    src={`${data.images[0]}`}
                    alt="Imagen 1"
                    width={800}
                    height={500}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                    style={{ aspectRatio: "800/500", objectFit: "contain" }}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={`${data.images[1]}`}
                    alt="Imagen 2"
                    width={800}
                    height={500}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                    style={{ aspectRatio: "800/500", objectFit: "contain" }}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={`${data.images[2]}`}
                    alt="Imagen 3"
                    width={800}
                    height={500}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                    style={{ aspectRatio: "800/500", objectFit: "contain" }}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </FramerComponent>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
