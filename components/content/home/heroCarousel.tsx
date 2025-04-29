"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import hero_background from "@/src/hero-background.jpg";
type heroCarouselProps = {
  products: any;
};

export default function HeroCarousel({ products }: heroCarouselProps) {
  return (
    <Carousel>
      <CarouselContent className={"h-[750px]"}>
        {products.map((product: any, index: number) => (
          <CarouselItem key={index}>
            <Image
              className={"object-cover"}
              src={hero_background}
              alt={product.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"left-5"} />
      <CarouselNext className={"right-5 bg-black text-white"} />
    </Carousel>
  );
}
