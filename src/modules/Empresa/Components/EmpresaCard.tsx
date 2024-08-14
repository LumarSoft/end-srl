import Image from "next/image";
import { FramerComponent } from "@/shared/Framer/FramerComponent";

export default function EmpresaCard() {
  return (
    <div className="lg:pb-20 flex flex-col lg:flex-row gap-6 xl:gap-20 justify-center lg:px-5 px-4">
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/mision.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Imagen de avión"
            className="rounded-md"
          />
        </div>
      </FramerComponent>
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24 lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="text-[#5f92cc] font-semibold text-2xl">MISIÓN</h3>
        <p className="text-neutral-400">
          END Servicios Aeronauticos S.R.L. se ha transformado en una empresa
          con trayectoria en los ensayos no destructivos en ramas tales como el
          Mantenimiento de Estructuras, Motores, Hélices y componentes
          aeronáuticos.{" "}
        </p>
        <h2 className="text-xl lg:text-2xl font-semibold">
          Somos una empresa con responsabilidad profesional, y nuestra meta
          principal es satisfacer los requerimientos de nuestros Clientes con la
          mayor calidad disponible en el área y permitiendo innovar en los
          métodos con una permanente Asistencia Técnica y Asesoramiento de
          nuestros profesionales. Todos nuestros trabajos son realizados por
          especialistas calificados y de basta experiencia operativa.
        </h2>
      </FramerComponent>
    </div>
  );
}