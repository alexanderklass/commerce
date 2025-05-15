"use client";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={"flex flex-row items-center gap-x-2"}>
      <Form action="/search" className="w-max-[550px] relative w-80">
        <input
          key={searchParams?.get("q")}
          type="text"
          name="q"
          placeholder="Suche nach Produkten..."
          autoComplete="off"
          defaultValue={searchParams?.get("q") || ""}
          className={`text-md w-full rounded-full border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400`}
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <SearchIcon className="h-4" />
        </div>
      </Form>
    </div>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <SearchIcon className="h-4" />
      </div>
    </form>
  );
}
