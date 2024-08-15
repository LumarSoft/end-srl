import { FramerComponent } from "@/shared/Framer/FramerComponent";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="lg:pb-20 flex flex-col gap-6 lg:flex-row xl:gap-20 lg:justify-between items-center px-4 md:px-28 2xl:px-80 text-focus-in">
      <FramerComponent
        style="flex flex-col items-center gap-6 lg:max-w-lg justify-start"
        animationInitial={{ x: -200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold md:text-4xl max-lg:text-center ">
          Líderes en reparación aeronáutica:
          <br />
          <b className="underline decoration-primary text-primary text-4xl md:text-5xl">
            Confianza y calidad garantizadas.
          </b>
        </h1>
        <p className="text-neutral-700 max-lg:text-center">
          Especializados en ofrecer servicios de alta calidad en ensayos no
          destructivos y mantenimiento de estructuras de aeronaves.
          Comprometidos con los más altos estándares de seguridad y eficiencia,
          garantizando la integridad y el rendimiento óptimo de cada aeronave
          que servimos.
        </p>
        <Link href={"/contacto"} className="bg-primary hover:bg-sky-800 text-white py-3 w-full rounded-md transition text-center">
          Contáctanos
        </Link>
      </FramerComponent>

      <FramerComponent
        animationInitial={{ x: 200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
      >
        <img
          className="w-full object-cover"
          src="/multimedia/aviones.jpg"
          alt="Mantenimiento de aeronaves"
        />
      </FramerComponent>
    </section>
  );
};
