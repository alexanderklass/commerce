import Collections from "components/layout/search/collections";
import { sorting } from "lib/constants";
import ChildrenWrapper from "./children-wrapper";
import SelectSortBy from "@/components/content/search/SelectSortBy";
import { CheckBoxFilterList } from "@/components/content/search/CheckBoxFilterList";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto flex w-[1400px] flex-col gap-8 pt-12 md:flex-row">
        <div className="">
          <CheckBoxFilterList />
        </div>
        <div className="w-full">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        <div className="">
          <SelectSortBy list={sorting} />
        </div>
      </div>
    </div>
  );
}
