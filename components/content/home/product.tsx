import Image from "next/image";
import Link from "next/link";
import placeholder from "@/src/placeholder.png";
type newProductProps = {
  product: any;
  newProduct?: boolean;
};

export default function Product({ product, newProduct }: newProductProps) {
  //TODO Implement quick buy function
  return (
    <Link
      href={`/product/${product.handle}`}
      className={
        "rounded-lg w-full relative bg-white overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg"
      }
    >
      <p
        className={`${!newProduct && "hidden"} bg-black text-white z-10 py-1 px-2 absolute top-2 left-2 font-bold rounded-md text-sm`}
      >
        Neu
      </p>
      <div className={"relative h-[300px]"}>
        <Image
          className={"object-cover"}
          fill
          src={product.featuredImage?.url || placeholder}
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
          <button
            className={
              "rounded-md hover:bg-gray-200 transition-all duration-300 px-4 py-2 cursor-pointer"
            }
          >
            + Hinzufügen
          </button>
        </div>
      </div>
    </Link>
  );
}
