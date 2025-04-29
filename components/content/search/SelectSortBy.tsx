"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";
import type { SortFilterItem } from "@/lib/constants";

type SortBy = {
  list: SortFilterItem[];
};

function SelectSortBy({ list }: SortBy) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const handleValueChange = (selectedSlug: string) => {
    const selectedItem = list.find((item) => item.slug === selectedSlug);
    if (!selectedItem) return;
    const href = createUrl(
      pathname,
      new URLSearchParams({
        ...(q && { q }),
        ...(selectedSlug && { sort: selectedSlug }),
      }),
    );
    router.push(href);
  };

  return (
    <Select onValueChange={(value: any) => handleValueChange(value)}>
      <SelectTrigger className={"w-[180px] text-md"}>
        <SelectValue placeholder={"Sortieren nach"} />
      </SelectTrigger>
      <SelectContent className={"text-lg"}>
        {list.map((item: any) => (
          <SelectItem key={item.title} value={item.slug}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectSortBy;
