import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FramerComponent } from "@/shared/Framer/FramerComponent";

const Footer = () => {
  const siteMap = [
    { name: "Inicio", path: "/" },
    { name: "Nuestra Empresa", path: "/empresa" },
    { name: "Nuestros Servicios", path: "/servicios" },
    { name: "Contacto", path: "/contacto" },
  ];
  return (
    <footer>
      <FramerComponent
        style="bg-slate-900 text-slate-200 py-4"
        animationInitial={{ y: 200, opacity: 0 }}
        animationAnimate={{ y: 0, opacity: 1 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="w-full place-content-center">
              <h3 className="text-lg font-semibold mb-4 max-sm:text-center">
                Mapa del Sitio
              </h3>
              <nav className="flex flex-col space-y-2 items-center md:items-start">
                {siteMap.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="w-full max-sm:flex max-sm:justify-center">
              <img
                src="/logosPng/logoGrandeClaro.png"
                className="w-48"
                alt="Logo END"
              />
            </div>

            <div className="w-full h-full flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">¡Seguinos!</h3>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/endsrl/"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/endmonsalvo/"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <a
                href="tel:+541144525240"
                className="flex items-center hover:text-cyan-400 transition-colors mb-3"
              >
                <Phone size={18} className="mr-2" />
                (011) 4452-5240
              </a>
              <a
                href="https://www.google.com/maps/dir//END+Servicios+Aeronauticos+SRL+Isabel+del+Maestro+1075+B1686CBF+Hurlingham+Provincia+de+Buenos+Aires/@-34.5795764,-58.6430819,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x95bcbeab4b6dabdb:0xabe1869f3f2b00bc"
                className="flex items-center hover:text-cyan-400 transition-colors text-center md:text-left"
                target="_blank"
              >
                <MapPin size={20} className="mr-2 flex-shrink-0" />
                Isabel del Maestro 1075
              </a>
            </div>
          </div>

          <Separator className="my-6 bg-slate-700" />

          <div className="text-center text-sm">
            © {new Date().getFullYear()} END Servicios Aeronáuticos.
          </div>
        </div>
      </FramerComponent>
    </footer>
  );
};

export default Footer;
