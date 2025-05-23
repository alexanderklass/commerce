"use client";

import { GridTileImage } from "components/grid/tile";
import { useProduct, useUpdateURL } from "components/product/product-context";
import Image from "next/image";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  return (
    <form>
      <div className="relative aspect-square rounded-md h-full border max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full p-3"
            fill
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-start gap-2 py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="w-32">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={100}
                    height={100}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
