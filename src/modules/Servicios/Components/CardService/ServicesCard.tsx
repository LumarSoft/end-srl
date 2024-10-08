import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import services from "./services";
import Link from "next/link";
import { FramerComponent } from "@/shared/Framer/FramerComponent";

export default function ServicesCard() {
  return (
    <FramerComponent
      style="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      animationInitial={{ x: -200, opacity: 0 }}
      animationWhileInView={{ x: 0, opacity: 1 }}
      animationViewPort={{ once: true, offset: 0.4 }}
    >
      {services.map((service, index) => (
        <Card
          key={index}
          className="group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
        >
          <div className="relative w-full h-64">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              className="object-cover w-full h-64"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-cyan-700">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="line-clamp-3">
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={service.url} className="w-full font-semibold">
                <Button className="w-full" variant={"outline"}>
                  Ver más
                </Button>
              </Link>
            </CardFooter>
          </div>
        </Card>
      ))}
    </FramerComponent>
  );
}
