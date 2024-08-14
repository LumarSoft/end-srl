import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mapa del Sitio</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Nuestra Empresa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">¡Seguinos!</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="">
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
              className="flex items-center hover:text-cyan-400 transition-colors"
              target="_blank"
            >
              <MapPin size={22} className="mr-2" />
              Isabel del Maestro 1075, Hurlingham
            </a>
          </div>
        </div>

        <Separator className="my-6 bg-slate-700" />

        <div className="text-center text-sm">
          © {new Date().getFullYear()} END Servicios Aeronáuticos.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
