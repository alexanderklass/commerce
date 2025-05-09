import React, { Suspense } from "react";
import Image from "next/image";
import { ProductProvider } from "@/components/product/product-context";
import { ProductDescription } from "@/components/product/product-description";
import { getCollectionProducts } from "@/lib/shopify";
import SlideInAnimation from "@/components/content/home/SlideInAnimation";

async function FeaturedProducts() {
  const products = await getCollectionProducts({
    collection: "featured-products",
  });
  if (!products) return null;
  return (
    <section className={"w-full flex items-center justify-center py-12"}>
      <div
        className={
          "flex items-center flex-col justify-center gap-y-10 w-[1400px]"
        }
      >
        <p className={"font-bold text-4xl mb-10"}>VORGESTELLTE PRODUKTE</p>
        <ProductProvider>
          <Suspense fallback={null}>
            {products.map((product, index) => {
              return (
                <SlideInAnimation index={index} key={product.handle}>
                  <div
                    key={product.handle}
                    className={`${index === 0 ? "flex-row-reverse" : "flex-row"} relative px-5 p-10 gap-x-5 flex items-center`}
                  >
                    <div
                      className={`absolute h-full w-[80%] ${index === 0 ? "left-0" : "right-0"} rounded-xl bg-blue-500/10`}
                    ></div>
                    <div
                      className={`${index === 0 ? "border-r-4" : "border-l-4"} border-sky-500`}
                    >
                      <Image
                        className={"w-fit h-[500px] object-contain"}
                        width={40}
                        height={40}
                        src={product.featuredImage?.url}
                        alt={product.handle}
                      />
                    </div>
                    <div className={"w-[500px] z-10"}>
                      <ProductDescription
                        featuredProduct={true}
                        key={product.handle}
                        product={product}
                      />
                    </div>
                  </div>
                </SlideInAnimation>
              );
            })}
          </Suspense>
        </ProductProvider>
      </div>
    </section>
  );
}

export default FeaturedProducts;
