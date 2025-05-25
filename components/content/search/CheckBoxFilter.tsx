'use client';
import { Checkbox } from '../../ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import type { PathFilterItem } from '@/components/layout/search/filter';
import { createUrl } from '@/lib/utils';

type CheckBoxFilterProps = {
  list: PathFilterItem[];
};

export default function CheckBoxFilter({ list }: CheckBoxFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const handleValueSelect = async (checked: boolean, selectedPath: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    const collectionHandle = `collection:${selectedPath}`;

    if (checked) {
      newParams.append('filter', collectionHandle);
    } else {
      const currentFilters = newParams.getAll('filter');
      newParams.delete('filter');
      currentFilters
        .filter((filter) => filter !== collectionHandle)
        .forEach((filter) => newParams.append('filter', filter));
    }

    const href = createUrl('/search', newParams);
    router.push(href);
  };

  const isFilterActive = (path: string) => {
    const activeFilters = searchParams.getAll('filter');
    return activeFilters.includes(`collection:${path}`);
  };

  newParams.delete('q');
  return (
    <div className={'w-[180px]'}>
      {list.map((item: PathFilterItem) => (
        <div key={item.path} className={'flex flex-row items-center justify-between gap-x-2'}>
          <label htmlFor={item.path}>{item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}</label>
          <Checkbox
            color={'blue'}
            checked={isFilterActive(item.path)}
            onCheckedChange={(checked) => handleValueSelect(checked as boolean, item.path)}
          />
        </div>
      ))}
    </div>
  );
}
