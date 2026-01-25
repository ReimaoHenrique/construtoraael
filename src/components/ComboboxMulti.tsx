'use client';

import * as React from 'react';
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox';

type Props = {
  items: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
};

export function ComboboxMulti({ items, value, onChange, placeholder }: Props) {
  const anchor = useComboboxAnchor();

  return (
    <Combobox multiple autoHighlight items={items} value={value} onValueChange={onChange}>
      <ComboboxChips ref={anchor} className="w-full border rounded-md px-2 py-1">
        <ComboboxValue>
          {(values) => (
            <>
              {values.map((v: string) => (
                <ComboboxChip key={v}>{v}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder={placeholder ?? 'Selecione...'} />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>

      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>Nenhum encontrado</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
