import { FramerComponent } from "@/shared/Framer/FramerComponent";
import Image from "next/image";

export const Info1 = () => {
  const marketStats = [
    "234 millones de órdenes de compra, un aumento del 11% respecto al año anterior.",
    "Se vendieron 489 millones de productos, un crecimiento del 16% frente a 2022.",
    "El ticket promedio por orden de compra fue de $33.457.",
    "La facturación total superó los siete billones de pesos, con un crecimiento del 175% respecto a 2022.",
    "Se anexaron 1,4 millones de nuevos compradores, llegando a un total 23.247.500 compradores.",
    "6 de cada 10 compradores efectúan una compra por mes.",
    // Agregar más estadísticas si hace falta, o eliminar dependiendo de lo que quiera gusti
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-20 lg:justify-between px-4 md:px-28 2xl:px-80">
      <FramerComponent
        style="flex justify-center rounded-md lg:max-w-xl lg:h-[40rem]"
        animationInitial={{ x: 200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <Image
          className="object-cover rounded-md shadow-lg"
          src="/despachoEcommerce.jpg"
          alt="Despacho de E-commerce"
          width={500}
          height={500}
        />
      </FramerComponent>

      <FramerComponent
        style="flex flex-col gap-6 lg:pt-24 lg:max-w-lg"
        animationInitial={{ x: -200, opacity: 0 }}
        animationWhileInView={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <h3 className="font-semibold">CANAL ECOMMERCE ACTUAL EN ARGENTINA</h3>
        <ul className="text-neutral-800 space-y-2">
          {marketStats.map((stat, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-black">•</span>
              {stat}
            </li>
          ))}
        </ul>
      </FramerComponent>
    </div>
  );
};
