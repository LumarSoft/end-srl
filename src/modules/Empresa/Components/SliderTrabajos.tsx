import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function SliderTrabajos() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/placeholder.svg"
                alt="Slide 1"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Titulo 1
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl text-white/80">
                  Subtitulo 1
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/placeholder.svg"
                alt="Slide 2"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Titulo 2
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl text-white/80">
                  Subitutulo 2
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/placeholder.svg"
                alt="Slide 3"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Titulo 3
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl text-white/80">
                  Subtitutlo 3
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/placeholder.svg"
                alt="Slide 3"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Titulo 4
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl text-white/80">
                  Subtitutlo 4
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/placeholder.svg"
                alt="Slide 3"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Titulo 5
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl text-white/80">
                  Subtitutlo 5
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-white hover:text-primary transition-colors">
          <ChevronLeftIcon className="w-8 h-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 text-white hover:text-primary transition-colors">
          <ChevronRightIcon className="w-8 h-8" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}