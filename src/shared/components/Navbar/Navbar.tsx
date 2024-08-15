"use client";

import { FramerComponent } from "@/shared/Framer/FramerComponent";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

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
      style={`w-full top-0 flex justify-between items-center px-4 md:px-28 2xl:px-80 2xl:h-20 fixed z-20 transition-shadow duration-500 bg-white ${
        scrolled ? "shadow-xl" : ""
      }`}
      animationInitial={{ y: -100, opacity: 0 }}
      animationAnimate={{ y: 0, opacity: 1 }}
    >
      <Link href={"/"}>
        <img src="/logosPng/logoChicoOscuro.png" className="h-16" alt="Logo END" />
      </Link>

      <nav className="lg:flex gap-2 md:gap-4 items-center font-semibold hidden">
        <Link
          href={"/empresa"}
          className="hover:text-primary transition duration-300"
        >
          Empresa
        </Link>
        <Link
          href={"/servicios"}
          className="hover:text-primary transition duration-300"
        >
          Servicios
        </Link>
        <Link
          href={"/contacto"}
          className="hover:text-primary transition duration-300"
        >
          Contacto
        </Link>
        <Link href={"/wsp"} className="hidden lg:block">
          <img src="/whatsapp.svg" className="w-10 h-10" alt="Whatsapp icono" />
        </Link>
      </nav>

      <DropDownNav />

      <Link href={"/wsp"} className="block lg:hidden fixed bottom-10 right-4">
        <img src="/whatsapp.svg" className="w-10 h-10" alt="Whatsapp icono" />
      </Link>
    </FramerComponent>
  );
};

const DropDownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:hidden">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={"/empresa"}>Empresa</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/servicios"}>Servicios</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/contacto"}>Contacto</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
