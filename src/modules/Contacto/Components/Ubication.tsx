import { FramerComponent } from "@/shared/Framer/FramerComponent";
import { Building, MapPin, UserCog, Users } from "lucide-react";
import React from "react";

const Ubication = () => {
  return (
    <FramerComponent
      style="text-primary-foreground p-8  flex flex-col justify-center items-center"
      animationInitial={{ x: 200, opacity: 0, backgroundColor: "white" }}
      animationAnimate={{ x: 0, opacity: 1, backgroundColor: "#334155" }}
    >
      <div className="w-full max-w-xl space-y-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <MapPin className="w-12 h-12" />
          <h2 className="text-3xl font-bold lg:text-4xl">¿Dónde estamos?</h2>
        </div>
        <div className="rounded-xl overflow-hidden w-full aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6569.943923520225!2d-58.643082!3d-34.579576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbeab4b6dabdb%3A0xabe1869f3f2b00bc!2sEND%20Servicios%20Aeronauticos%20SRL!5e0!3m2!1ses!2sus!4v1723234704352!5m2!1ses!2sus"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="space-y-6 text-left">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold flex items-center">
                <Building className="w-5 h-5 mr-2" /> Taller CASA CENTRAL:
              </h4>
              <p>
                <b className="text-cyan-400"> (+54 911)</b> 4452-5240
              </p>
            </div>
            <div>
              <h4 className="font-semibold flex items-center">
                <Building className="w-5 h-5 mr-2" /> Taller Anexo (ARGENPROP
                SRL):
              </h4>
              <p>
                <b className="text-cyan-400">(+54 911)</b> 4741-2035
              </p>
            </div>
            <div>
              <h4 className="font-semibold flex items-center">
                <Users className="w-5 h-5 mr-2" /> En Campaña
              </h4>
              <p>
                Juan Carlos: <b className="text-cyan-400">(+54 911)</b>{" "}
                15-5327-3431
              </p>
              <p>
                Pablo: <b className="text-cyan-400">(+54 911)</b> 15-3422-0562
              </p>
            </div>
            <div>
              <h4 className="font-semibold flex items-center">
                <UserCog className="w-5 h-5 mr-2" /> Oficina Técnica /
                Administración
              </h4>
              <p>
                Oficina Técnica (Yanina):{" "}
                <b className="text-cyan-400">(+54 911)</b> 15-5384-4610
              </p>
              <p>
                Administración: <b className="text-cyan-400">(+54 911)</b>{" "}
                15-5036-4651
              </p>
            </div>
          </div>
        </div>
      </div>
    </FramerComponent>
  );
};

export default Ubication;
