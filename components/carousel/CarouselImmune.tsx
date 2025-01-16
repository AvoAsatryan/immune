import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CarouselImmune = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const images = ["/content1.jpg", "/content2.jpg", "/content3.jpg"];
  return (
    <Carousel plugins={[plugin.current]} className="flex w-full h-full p-0 gap-0">
      <CarouselContent className="flex relative w-full h-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="flex w-full h-full">
                <CardContent className="flex rounded-3xl w-auto h-[100%] p-0">
                  <img
                    src={images[index]}
                    alt="About Us Image 1"
                    className="carousel-image"
                  />
                </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselImmune;
