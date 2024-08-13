import { Carousel } from "flowbite-react";

export function CarouselHero() {
  return (
    <div className="h-screen w-screen">
      <Carousel className="">
        <img src="/carousel1.jpg" alt="..." className=""/>
        <img src="/carousel2.jpg" alt="..." className=""/>
        <img src="/carousel3.jpg" alt="..." className=""/>
      </Carousel>
    </div>
  );
}
