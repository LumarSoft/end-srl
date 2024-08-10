import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/modules/Servicios/Components/services";

export default function ServicesCard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-600">
        Ensayos no Destructivos
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2 relative h-[400px]">
          <Image
            src="/turbinaAvion.jpg"
            alt="Ensayos no Destructivos"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-lg mb-4">
            <b className="bg-cyan-400 rounded-sm px-1 text-cyan-800 py-1">
              END Servicios Aeronáuticos S.R.L.
            </b>{" "}
            ha desarrollado Especialistas Calificados en la realización de
            Ensayos No Destructivos.
          </p>
          <p className="mb-4">
            Contamos con equipos y accesorios de última tecnología,
            posibilitando tanto un servicio in situ, como así también en
            talleres diseñados para tal fin. Asociados con un grupo de Empresas
            de reconocida trayectoria, ofrecemos al mercado las más variadas
            técnicas de Ensayos No Destructivos en todo el territorio de la
            República Argentina como así también en el exterior.
          </p>
          <p>
            Nuestro objetivo es ofrecer al mercado Aeronáutico, soluciones
            especializadas de inspección a través de Pruebas No Destructivas
            brindando así un servicio único y de calidad no solo en el campo
            aeronáutico/aeroespacial, sino también en otras áreas como
            industrial y automotriz.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <Card className="flex h-full border-2 border-cyan-200 transition-colors duration-300 ease-in-out hover:border-cyan-600">
              <div className="w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-l-md"
                />
              </div>
              <div className="w-full flex flex-col justify-between bg-gradient-to-r from-cyan-50 to-white">
                <div>
                  <CardHeader>
                    <CardTitle className="text-cyan-700">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </div>
                <div className="flex justify-end p-4">
                  <ArrowRight className="text-cyan-600 animate-pulse" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
