import React, { Suspense } from "react";
import Image from "next/image";
import { ProductProvider } from "@/components/product/product-context";
import { ProductDescription } from "@/components/product/product-description";
import { getCollectionProducts } from "@/lib/shopify";

async function FeaturedProducts() {
  const products = await getCollectionProducts({
    collection: "featured-products",
  });
  if (!products) return null;
  return (
    <section
      className={"bg-gray-50 w-full flex items-center justify-center py-12"}
    >
      <div className={"flex items-center flex-col justify-center w-[1400px]"}>
        <p className={"font-bold text-4xl mb-10"}>VORGESTELLTE PRODUKTE</p>
        <ProductProvider>
          <Suspense fallback={null}>
            {products.map((product, index) => {
              return (
                <div
                  className={`${index === 0 ? "flex-row-reverse" : "flex-row"} px-5 gap-x-5 flex items-center`}
                >
                  <div className={"w-full bg-blue-300"}>
                    <Image
                      className={"w-fit opacity-80 h-fit object-contain"}
                      width={40}
                      height={40}
                      src={product.featuredImage?.url}
                      alt={product.handle}
                    />
                  </div>
                  <div className={"w-fit"}>
                    <ProductDescription
                      featuredProduct={true}
                      key={product.handle}
                      product={product}
                    />
                  </div>
                </div>
              );
            })}
          </Suspense>
        </ProductProvider>
      </div>
    </section>
  );
}

export default FeaturedProducts;
