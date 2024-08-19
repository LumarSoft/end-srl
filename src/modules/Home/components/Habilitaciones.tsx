import { FramerComponent } from "@/shared/Framer/FramerComponent";
import { Badge } from "@/components/ui/badge";

export function Habilitaciones() {
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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <FramerComponent
            animationInitial={{ y: 100, opacity: 0 }}
            animationWhileInView={{ y: 0, opacity: 1 }}
            animationViewPort={{ once: true, offset: 0.4 }}
          >
            <div className="w-full flex">
              <div className="w-full">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Habilitaciones
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ESTE T.A.R. (TALLERES AERONÁUTICOS DE REPARACIÓN) CUENTA CON
                  TODAS LAS CERTIFICACIONES Y NORMAS VIGENTES REQUERIDAS POR
                  NUESTRA ADMINISTRACIÓN NACIONAL DE AVIACION CIVIL (ANAC) Y SE
                  MANTIENEN ACTUALIZADAS CONSTANTEMENTE.
                </p>
              </div>
              <div className="w-full text-center">
                Archivos
                <div className="flex flex-col items-center mt-4 gap-2">
                  <Badge>
                    <a
                      href="/Certificado de Habilitacion (ANAC).pdf"
                      target="_blank"
                      className="flex"
                    >
                      Certificado de Habilitacion (ANAC)
                    </a>
                  </Badge>
                  <Badge>
                    <a
                      href="/Certificado de Habilitacion (OMAD).pdf"
                      target="_blank"
                      className="flex"
                    >
                      Certificado de Habilitacion (OMAD)
                    </a>
                  </Badge>
                  <Badge>
                    <a
                      href="/ESPECIFICACIONES DE OP (ANAC).pdf"
                      target="_blank"
                      className="flex"
                    >
                      Especificaciones de OP (ANAC)
                    </a>
                  </Badge>
                  <Badge>
                    <a
                      href="/ESPECIFICACIONES DE OP (OMAD).pdf"
                      target="_blank"
                      className="flex"
                    >
                      Especificaciones de OP (OMAD)
                    </a>
                  </Badge>
                </div>
              </div>
            </div>
          </FramerComponent>
          <FramerComponent
            style="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center"
            animationVariants={container}
            animationInitial="hidden"
            animationWhileInView="show"
            animationViewPort={{ once: true, offset: 0.4 }}
          >
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">
                Partículas Magnetizables
              </h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM-E 1444/E1444M</li>
                <li>ASTM-E 709</li>
                <li>Procedimientos aprobados de Lycoming</li>
                <li>Procedimientos del Fabricante</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Corrientes Inducidas</h3>
              <ul className="text-muted-foreground flex-1">
                <li>MIL-HDBK-728/2</li>
                <li>MIL-STD-1537</li>
                <li>ASTM E1004</li>
                <li>Procedimientos del Fabricante</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Ultrasonidos</h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM E 114, ASTM-E 317, ASTM-E 587</li>
                <li>
                  ASTM-B 594, ASTM-E 797 /E797M, ASTM E 2580, SAE AMS-STD-2154
                </li>
                <li>
                  CMI Specification MHS-200 (Personal con certificado oficial)
                </li>
                <li>
                  Procedimientos CFM56-7B (Fan Blade)(Personal con certificados
                  oficial)
                </li>
                <li>Procedimiento de fabricante</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style=" rounded-lg bg-secondary p-4 border"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Ultrasonido Phase Array</h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM-E 2491</li>
                <li>Procedimiento del fabricante</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Liquidos penetrantes</h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM-E 195/E165M</li>
                <li>ASTM-E 1417/E1417M</li>
                <li>Procedimientos aprobados de Lycomming</li>
                <li>Procedimientos del fabricante</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Radiografía Industrial</h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM-E1742/E1742M</li>
                <li>ASTM E94/E94M</li>
                <li>ASTM E1079</li>
                <li>ASTM E1254</li>
                <li>Procedimientos del fabricante</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">
                Endoscopía / Boroscopía / Videoscopía
              </h3>
              <p className="text-muted-foreground flex-1">
                Procedimientos del fabricante
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Dureza</h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM-A 1038 (Método UCI)</li>
                <li>ASTM A956/A956M (Método Leeb)</li>
              </ul>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-secondary p-4 border flex flex-col justify-between items-center"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Termografía</h3>
              <ul className="text-muted-foreground flex-1">
                <li>ASTM-E 2582</li>
                <li>Procedimientos del Fabricante</li>
              </ul>
            </FramerComponent>
          </FramerComponent>
        </div>
      </div>
    </section>
  );
}
