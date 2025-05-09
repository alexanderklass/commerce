import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import SelectSortBy from "@/components/content/search/SelectSortBy";
import { CheckBoxFilterList } from "@/components/content/search/CheckBoxFilterList";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="mx-auto flex w-[1400px] flex-col gap-8 pt-12 md:flex-row flex-grow">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center my-5">
            <p className="text-xl font-bold">Filter</p>
            <Suspense fallback={null}>
              <SelectSortBy list={sorting} />
            </Suspense>
          </div>
          <div className="flex flex-row gap-x-5 flex-grow">
            <div className="shrink-0">
              <Suspense fallback={null}>
                <CheckBoxFilterList />
              </Suspense>
            </div>
            <div className="flex-grow">
              <Suspense fallback={null}>
                <ChildrenWrapper>{children}</ChildrenWrapper>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
