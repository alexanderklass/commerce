import Image from "next/image";
import Link from "next/link";
import placeholder from "@/src/placeholder.png";
type categoriesProductProps = {
  title: string;
  image?: any;
  href: any;
};

export default function CategoriesProduct({
  title,
  image,
  href,
}: categoriesProductProps) {
  return (
    <Link
      href={href || "#"}
      className={
        "bg-gray-500/60 text-white group hover:scale-105 duration-300 cursor-pointer shadow-md hover:shadow-xl transition-all relative overflow-hidden h-[324px] w-[324px] p-5 flex flex-col items-start justify-end rounded-lg"
      }
    >
      <Image src={image || placeholder} className={"w-full object-cover"} fill alt={title} />
      <div className={"z-10"}>
        <p className={"font-bold text-2xl"}>{title.toUpperCase()}</p>
        <p
          className={
            "cursor-pointer underline-offset-4 transition-all duration-300 group-hover:underline text-sm"
          }
        >
          Entdecken
        </p>
      </div>
    </Link>
  );
}
