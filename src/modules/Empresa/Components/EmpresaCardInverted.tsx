import Image from "next/image";
import { FramerComponent } from "@/shared/Framer/FramerComponent";

export default function EmpresaCardInverted() {
  return (
    <div className="mt-9 lg:pb-20 flex flex-col lg:flex-row gap-6 p-5 xl:gap-20 justify-center lg:px-5 px-4">
      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24 lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="text-[#5f92cc] font-semibold text-2xl">
          INFRAESTRUCTURA
        </h3>
        <p className="text-neutral-400">
          END Servicios Aeronauticos S.R.L. cuenta con su Base Administrativa y
          Técnica ubicada en la localidad de Hurlingham, Provincia de Buenos
          Aires.{" "}
        </p>
        <h2 className="text-xl lg:text-2xl font-semibold">
          Nuestra base nos ha permitido atender y asistir Servicios Técnicos a
          lo largo y ancho de la República Argentina y en el exterior. Nuestras
          tecnologías e insumos se encuentran en constante actualización para
          procurar la mejor calidad en nuestro trabajo. Nuestro Capital cuenta
          con una gran variedad de equipos, accesorios y estándares de
          calibración para la realización in situ de Ensayos No Destructivos.
        </h2>
      </FramerComponent>
      <FramerComponent
        style="w-full h-96 bg-neutral-400 rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/infraestructura.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Imagen de avión"
            className="rounded-md"
          />
        </div>
      </FramerComponent>
    </div>
  );
}
