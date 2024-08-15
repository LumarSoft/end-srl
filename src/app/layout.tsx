import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/shared/components/Footer/Footer";
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "@/shared/components/OpenModuleAnimation/animation.scss";
import "@/modules/Home/animation.scss";
import { OpenHomeAnimation } from "@/shared/components/OpenModuleAnimation/OpenModuleAnimation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "END - Servicios aeronáuticos",
  description:
    "BRINDA TRABAJOS Y SERVICIOS DE EXCELENCIA EN TODO LO REFERENTE A ENSAYOS NO DESTRUCTIVOS Y MANTENIMIENTO DE ESTRUCTURAS DE AERONAVES.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        style={{ overflow: "hidden" }}
      >
        <Navbar />
        <OpenHomeAnimation />

        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
