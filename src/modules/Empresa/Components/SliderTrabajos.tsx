import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "lucide-react";
import { BadgeClientes } from "./BadgeClientes";

export default function SliderTrabajos() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/slide-1.jpg"
                alt="Slide 1"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Movilidad en ensayos no destructivos
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-l text-white/80">
                  Podemos realizarlos tanto en nuestra base como IN SITU. Con
                  casi 20 años de experiencia realizamos tareas en todo lo largo
                  del territorio de la República Argentina como en el exterior.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/slide-2.jpg"
                alt="Slide 2"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Personal altamente capacitado
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-l text-white/80">
                  Contamos con especialistas calificados y de basta experiencia
                  operativa. Nuestro personal está capacitado para trabajar con
                  la última tecnología en Ensayos No Destructivos. Además
                  realizamos nuestras tareas de forma segura y con asesoramiento
                  permanente a nuestro Cliente
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/slide-3.jpg"
                alt="Slide 3"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Actualización permanente
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-l text-white/80">
                  Nuestras tecnologías e insumos se encuentran en constante
                  actualización para procurar la mejor calidad en nuestro
                  trabajo. Nuestro Capital cuenta con una gran variedad de
                  equipos, accesorios y estándares de calibración para la
                  realización in situ de Ensayos No Destructivos.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/slide-4.jpg"
                alt="Slide 4"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Trabajos de calidad
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-l text-white/80">
                  Nuestra meta principal es satisfacer los requerimientos de
                  nuestros Clientes con la mayor calidad innovando en los
                  métodos utilizados. Contamos con instrumentos de ensayo, de
                  medida y de imagen de gama líder del mercado. Todos los
                  procedimientos se realizan cumpliendo las normativas vigentes
                  requeridas por la Administracion Nacional de Aeronavegabilidad
                  (ANAC).
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src="/slide-5.jpg"
                alt="Slide 5"
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <h3 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Clientes satisfechos
                </h3>
                <p className="mt-2 sm:mt-3 lg:mt-4 text-base sm:text-lg lg:text-l text-white/80">
                  Estos son algunos de nuestros clientes que sigue confiando en
                  END SERVICIOS AERONÁUTICOS SRL:
                </p>
                <ul className="text-white/80">
                  <BadgeClientes>
                    AERO BAIRES S.A.C.I. (Aeropuerto Int. San Fernando)
                  </BadgeClientes>
                  <BadgeClientes>
                    AVIACIÓN ATLÁNTICO SUR S.A. (Aeropuerto Int. San Fernando)
                  </BadgeClientes>
                  <BadgeClientes>
                    TECHNIS S.A. (Aeropuerto Int. San Fernando)
                  </BadgeClientes>
                  <BadgeClientes>ANDES LINEAS AEREAS S.A.</BadgeClientes>
                  <BadgeClientes>
                    CIELO S.A. (Aeropuerto Int. San Fernando)
                  </BadgeClientes>
                  <BadgeClientes>
                    AVIATION MAINTENANCE S.R.L. (Aeropuerto Int. San Fernando)
                  </BadgeClientes>
                  <BadgeClientes>
                    ARGENPROP S.R.L. (Aeropuerto Int. San Fernando)
                  </BadgeClientes>
                  <BadgeClientes>ENTRE MUCHOS MÁS ...</BadgeClientes>
                </ul>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-black hover:text-primary transition-colors">
          <ChevronLeftIcon className="w-8 h-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 text-black hover:text-primary transition-colors">
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
