"use client";
import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Users, UserCog, Building } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function ContactCard() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.user_email || !formData.user_phone || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, completa todos los campos.",
      });
      return;
    }

    try {
      await emailjs.sendForm(
        "service_bxf00hj",
        "template_76rjx6b",
        (form.current ?? undefined) as unknown as HTMLFormElement,
        "QKnAoh9QQZ0-6AXIU"
      );
      toast({
        title: "Mensaje enviado con éxito!",
        className: "bg-green-200 text-green-600 border-green-500 font-bold",
      });
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
      });
    }
  };

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="bg-background p-8 lg:p-12 flex flex-col justify-center items-center">
          <div className="w-full max-w-xl space-y-8">
            <div className="flex flex-col items-center space-y-4 ">
              <MessageSquare className="w-12 h-12" />
              <h2 className="text-3xl font-bold text-center lg:text-4xl">
                Contáctanos
              </h2>
            </div>
            <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="user_name"
                    name="user_name"
                    placeholder="Juan Pérez"
                    type="text"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user_email">Email</Label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="tu@ejemplo.com"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_phone">Teléfono</Label>
                <Input
                  id="user_phone"
                  name="user_phone"
                  type="number"
                  placeholder="(555) 555-5555"
                  value={formData.user_phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-slate-700 text-primary-foreground p-8 lg:p-12 flex flex-col justify-center items-center">
          <div className="w-full max-w-xl space-y-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <MapPin className="w-12 h-12" />
              <h2 className="text-3xl font-bold lg:text-4xl">
                ¿Dónde estamos?
              </h2>
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
                    <Building className="w-5 h-5 mr-2" /> Taller Anexo
                    (ARGENPROP SRL):
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
                    Pablo: <b className="text-cyan-400">(+54 911)</b>{" "}
                    15-3422-0562
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
        </div>
      </div>
      <Toaster />
    </main>
  );
}
