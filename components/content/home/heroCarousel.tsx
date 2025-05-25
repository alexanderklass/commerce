'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '../../ui/carousel';
import hero_background from '@/src/hero-background.jpg';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';

type heroCarouselProps = {
  products: any;
};

export default function HeroCarousel({ products }: heroCarouselProps) {
  const autoplay = useRef(Autoplay({ delay: 8000, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi | null>(null);

  const handleNext = () => {
    if (!api) return;
    api.scrollNext();
    autoplay.current.reset();
  };

  const handlePrev = () => {
    if (!api) return;
    api.scrollPrev();
    autoplay.current.reset();
  };
  return (
    <Carousel setApi={setApi} plugins={[autoplay.current]} className={'relative'}>
      <CarouselContent className={'h-[750px]'}>
        {products.map((product: any, index: number) => (
          <CarouselItem key={index}>
            <Link href={product.path || '#'}>
              <Image
                className={'h-full w-full object-cover'}
                src={product.image?.url || hero_background}
                alt={product.title}
                width={1920}
                height={1080}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={handlePrev} className={'left-5 bg-black text-white'} />
      <CarouselNext onClick={handleNext} className={'right-5 bg-black text-white'} />
    </Carousel>
  );
}
