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
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

type heroCarouselProps = {
  products: any;
};

export default function HeroCarousel({ products }: heroCarouselProps) {
  return (
    <Carousel plugins={[Autoplay({ delay: 3000 })]} className={"relative"}>
      <CarouselContent className={"h-[750px]"}>
        {products.map((product: any, index: number) => (
          <CarouselItem key={index}>
            <Link href={product.path || "#"}>
              <Image
                className={"object-cover w-full h-full"}
                src={product.image?.url || hero_background}
                alt={product.title}
                width={1920}
                height={1080}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={"left-5 bg-black text-white"} />
      <CarouselNext className={"right-5 bg-black text-white"} />
    </Carousel>
  );
}
