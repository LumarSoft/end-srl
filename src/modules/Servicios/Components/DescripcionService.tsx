import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FramerComponent } from "@/shared/Framer/FramerComponent";
import { Briefcase, Cpu, Target } from "lucide-react";
import Image from "next/image";

export const DescriptionService = () => {
  return (
    <FramerComponent
      aria-label="Información principal"
      style="mb-12"
      animationInitial={{ x: 200, opacity: 0 }}
      animationWhileInView={{ x: 0, opacity: 1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Ensayos no Destructivos
      </h1>
      <div className="relative h-[400px] mb-8">
        <Image
          src="/multimedia/turbinaAvion.jpg"
          alt="Turbina de avión"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
          <Briefcase className="w-12 h-12 text-sky-700 mb-4" />
          <CardTitle className="text-xl font-semibold text-sky-800 mb-3">
            END Servicios Aeronáuticos S.R.L.
          </CardTitle>
          <CardDescription className="text-gray-700 leading-relaxed">
            Ha desarrollado Especialistas Calificados en la realización de
            Ensayos No Destructivos.
          </CardDescription>
        </Card>

        <Card className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
          <Cpu className="w-12 h-12 text-sky-700 mb-4" />
          <CardTitle className="text-xl font-semibold text-sky-700 mb-3">
            Tecnología de Punta
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            Contamos con equipos y accesorios de última tecnología,
            posibilitando tanto un servicio in situ, como así también en
            talleres diseñados para tal fin. Ofrecemos variadas técnicas de
            Ensayos No Destructivos en Argentina y el exterior.
          </CardDescription>
        </Card>

        <Card className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
          <Target className="w-12 h-12 text-cyan-700 mb-4" />
          <CardTitle className="text-xl font-semibold text-cyan-700 mb-3">
            Nuestro Objetivo
          </CardTitle>
          <CardDescription className="text-gray-600 leading-relaxed">
            Ofrecer soluciones especializadas de inspección a través de Pruebas
            No Destructivas, brindando un servicio único y de calidad en el
            campo aeronáutico/aeroespacial, industrial y automotriz.
          </CardDescription>
        </Card>
      </div>
    </FramerComponent>
  );
};
