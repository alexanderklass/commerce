'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { usePathname, useSearchParams } from 'next/navigation';
import { createUrl } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import type { SortFilterItem } from '@/lib/constants';

type SortBy = {
  list: SortFilterItem[];
};

function SelectSortBy({ list }: SortBy) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');
  const filters = searchParams.getAll('filter');

  const handleValueChange = (selectedSlug: string) => {
    const selectedItem = list.find((item) => item.slug === selectedSlug);
    if (!selectedItem) return;

    const newParams = new URLSearchParams();

    if (q) newParams.append('q', q);

    if (selectedSlug) newParams.append('sort', selectedSlug);

    filters.forEach((filter) => {
      newParams.append('filter', filter);
    });

    const href = createUrl(pathname, newParams);
    router.push(href);
  };

  return (
    <Select value={searchParams.get('sort') || ''} onValueChange={(value: any) => handleValueChange(value)}>
      <SelectTrigger className={'text-md w-[180px]'}>
        <SelectValue placeholder={'Sortieren nach'} />
      </SelectTrigger>
      <SelectContent className={'text-lg'}>
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
