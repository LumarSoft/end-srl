"use client";

import { FramerComponent } from "@/shared/Framer/FramerComponent";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FramerComponent
      style={`w-full flex justify-between items-center px-4 md:px-28 2xl:px-80 2xl:h-20 fixed z-20 transition-shadow duration-500 bg-white ${
        scrolled ? "shadow-xl" : ""
      }`}
      animationInitial={{ y: -100, opacity: 0 }}
      animationAnimate={{ y: 0, opacity: 1 }}
    >
      <Link href={"/"}>
        <img src="/logo.png" className="h-16" alt="Logo END" />
      </Link>

      <nav className="flex gap-2 md:gap-4 items-center">
        <Link href={"/empresa"}>Empresa</Link>
        <Link href={"/servicios"}>Servicios</Link>
        <Link href={"/contacto"}>Contacto</Link>
        <Link href={"/wsp"}>
          <img src="/whatsapp.svg" className="w-10 h-10" alt="Whatsapp icono" />
        </Link>
      </nav>
    </FramerComponent>
  );
};
