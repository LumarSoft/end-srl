import { FramerComponent } from "@/shared/Framer/FramerComponent";

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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#05589e]">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <FramerComponent
            animationInitial={{ y: 100, opacity: 0 }}
            animationWhileInView={{ y: 0, opacity: 1 }}
            animationViewPort={{ once: true, offset: 0.4 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Habilitaciones
            </h2>
            <p className="max-w-[800px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ESTE T.A.R. (TALLERES AERONÁUTICOS DE REPARACIÓN) CUENTA CON TODAS
              LAS CERTIFICACIONES Y NORMAS VIGENTES REQUERIDAS POR NUESTRA
              ADMINISTRACIÓN NACIONAL DE AVIACION CIVIL (ANAC) Y SE MANTIENEN
              ACTUALIZADAS CONSTANTEMENTE.
            </p>
          </FramerComponent>
          <FramerComponent
            style="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center"
            animationVariants={container}
            animationInitial="hidden"
            animationWhileInView="show"
            animationViewPort={{ once: true, offset: 0.4 }}
          >
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">
                Partículas Magnetizables
              </h3>
              <p className="text-muted-foreground">
                ASTM E1444/E1444M - ASTM E709 - Procedimientos aprobados de
                Lycoming - PROCEDIMIENTOS DEL FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Corrientes Inducidas</h3>
              <p className="text-muted-foreground">
                MIL-HDBK-728/2 - MIL-STD-1537 - SAE ARP 4402 - PROCEDIMIENTOS
                DEL FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Ultrasonidos</h3>
              <p className="text-muted-foreground">
                ASTM E317 - ASTM E587 - ASTM B594 - SAE AMS-STD-2154 - ASTM E127
                - Procedimiento MHS-200 de Teledyne Continental Motors - CFM56-7
                Fan Blade Ultrasonic Inspection de GE Aircraft Engines -
                PROCEDIMIENTOS DEL FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style=" rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Ultrasonido Phase Array</h3>
              <p className="text-muted-foreground">
                ASTM E2491 - PROCEDIMIENTOS DEL FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Liquidos penetrantes</h3>
              <p className="text-muted-foreground">
                ASTM E165/E165M - ASTM E1417/E1417M - SAE AMS-2644 -
                Procedimientos aprobados de Lycoming - PROCEDIMIENTOS DEL
                FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Radiografía Industrial</h3>
              <p className="text-muted-foreground">
                ASTM E1742/E1742M - ASTM E94 - ASTM E1079 - ASTM E1254 -
                PROCEDIMIENTOS DEL FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">
                Endoscopía / Boroscopía / Videoscopía
              </h3>
              <p className="text-muted-foreground">
                PROCEDIMIENTOS DEL FABRICANTE
              </p>
            </FramerComponent>
            <FramerComponent
              style="rounded-lg bg-white p-4"
              animationInitial={{ opacity: 0, y: 50 }}
              animationVariants={itemAnimado}
            >
              <h3 className="text-lg font-semibold">Personal / Taller</h3>
              <p className="text-muted-foreground">
                ISO 9712 - ASTM E1212 - ASTM E543 - ASNT SNT-TC-1A
              </p>
            </FramerComponent>
          </FramerComponent>
        </div>
      </div>
    </section>
  );
}

function BadgeIcon(props: any) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}
