"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import type { PathFilterItem } from "@/components/layout/search/filter";
import { createUrl } from "@/lib/utils";

type CheckBoxFilterProps = {
  list: PathFilterItem[];
};

export default function CheckBoxFilter({ list }: CheckBoxFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const handleValueSelect = async (checked: boolean, selectedPath: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (checked) {
      newParams.append("filter", selectedPath);
    } else {
      const currentFilters = newParams.getAll("filter");
      newParams.delete("filter");
      currentFilters
        .filter((filter) => filter !== selectedPath)
        .forEach((filter) => newParams.append("filter", filter));
    }

    const href = createUrl("/search", newParams);
    router.push(href);
  };

  const isFilterActive = (path: string) => {
    const activeFilters = searchParams.getAll("filter");
    return activeFilters.includes(path);
  };

  newParams.delete("q");
  return (
    <>
      {list.map((item: PathFilterItem) => (
        <div
          key={item.path}
          className={"flex flex-row items-center justify-between gap-x-2"}
        >
          <label htmlFor={item.path}>{item.title}</label>
          <Checkbox
            color={"blue"}
            checked={isFilterActive(item.path)}
            onCheckedChange={(checked) =>
              handleValueSelect(checked as boolean, item.path)
            }
          />
        </div>
      ))}
    </>
  );
}
