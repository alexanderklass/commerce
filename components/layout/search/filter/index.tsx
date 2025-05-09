import { SortFilterItem } from "lib/constants";
import { FilterItem } from "./item";
export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <li>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </li>
  );
}

export default function FilterList({
  list,
  title,
}: {
  list: ListItem[];
  title?: string;
}) {
  return (
    <>
      <nav>
        {title ? <h3 className="hidden text-xs md:block">{title}</h3> : null}
        <div>
          <FilterItemList list={list} />
        </div>
      </nav>
    </>
  );
}
