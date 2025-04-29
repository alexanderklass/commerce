import Image from "next/image";
import Link from "next/link";

type newProductProps = {
  product: any;
  newProduct?: boolean;
};

export default function NewsProduct({ product, newProduct }: newProductProps) {
  return (
    <div
      className={
        "rounded-lg w-[324px] relative bg-white overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg"
      }
    >
      <p
        className={`${newProduct ? "block" : "hidden"}bg-black text-white z-10 py-1 px-2 absolute top-2 left-2 font-bold rounded-md text-sm`}
      >
        Neu
      </p>
      <div className={"relative h-[300px]"}>
        <Image
          className={"object-cover"}
          fill
          src={product.featuredImage?.url}
          alt={`${product.handle}`}
        />
      </div>
      <div
        className={
          "flex w-full min-h-[150px] text-black p-4 justify-between flex-col"
        }
      >
        <div className={"flex flex-col gap-y-1"}>
          <p>{product.title}</p>
        </div>
        <div className={"w-full flex flex-row justify-between items-center"}>
          <p className={"font-bold"}>
            {product.priceRange.minVariantPrice.amount} €
          </p>
          <Link
            href={`/product/${product.handle}`}
            className={
              "rounded-md hover:bg-gray-200 transition-all duration-300 px-4 py-2 cursor-pointer"
            }
          >
            + Hinzufügen
          </Link>
        </div>
      </div>
    </div>
  );
}
