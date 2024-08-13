import { FramerComponent } from "@/shared/Framer/FramerComponent";
import { Check } from "lucide-react";

export function Valores() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <FramerComponent
          animationInitial={{ x: 200, opacity: 0 }}
          animationWhileInView={{ x: 0, opacity: 1 }}
          animationViewPort={{ once: true, offset: 0.4 }}
        >
          <img
            src="/avion.jpg"
            width="700"
            height="500"
            alt="Nuestros Valores"
            className="mx-auto aspect-[7/5] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </FramerComponent>
        <FramerComponent
          style="space-y-4"
          animationInitial={{ x: -200, opacity: 0 }}
          animationWhileInView={{ x: 0, opacity: 1 }}
          animationViewPort={{ once: true, offset: 0.4 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent">
              Nuestros Valores
            </h2>
            <p className="max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En nuestra empresa, nos guiamos por un conjunto de valores
              fundamentales que definen nuestra cultura y la forma en que nos
              relacionamos con nuestros clientes, colaboradores y la comunidad.
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-start gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center bg-white ">
                <Check color="#2563eb" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  Profesionalismo
                </h3>
                <p className="text-secondary">
                  Somos una empresa con responsabilidad profesional y nuestra
                  meta principal es satisfacer los requerimientos de nuestros
                  clientes con la mayor calidad disponible en el área.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center bg-white">
                <Check color="#2563eb" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">Esfuerzo</h3>
                <p className="text-secondary">
                  Fomentamos el crecimiento profesional y personal de quienes
                  integran END servicios Aeronáuticos SRL.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center bg-white">
                <Check color="#2563eb" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">
                  Innovación
                </h3>
                <p className="text-secondary">
                  Estamos en permanente búsqueda de nuevas tecnologías aplicadas
                  a los ensayos no destructivos.
                </p>
              </div>
            </li>
          </ul>
        </FramerComponent>
      </div>
    </section>
  );
}

function CheckIcon({
  checkColor = "blue",
  ...props
}: { checkColor?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={checkColor} // Cambia el color del check
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
