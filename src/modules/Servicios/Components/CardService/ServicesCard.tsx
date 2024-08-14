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
import services from "./services"

export default function ServicesCard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Button variant="outline" className="w-full font-semibold">
                Ver más
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}
