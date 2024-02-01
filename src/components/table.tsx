import TrashIcon from "@/icons/trash";
import { ProsCons, TypeTable } from "@/types/proscons";
import { FormEvent, useState } from "react";
import Input from "./input";
import Select from "./select";

type TableProps = {
  type: TypeTable;
  title: string;
  items: Array<ProsCons>;
  selectProps: {
    onChange: (type: TypeTable, itemId: string, newValue: string) => void;
  };
  onDelete: (type: TypeTable, item: ProsCons) => void;
  formProps: {
    autoFocus?: boolean;
    name: string;
    onSubmit: (type: TypeTable, value: string) => void;
  };
}

export default function Table({ items, selectProps, formProps, onDelete, type, title }: TableProps) {

  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formProps.onSubmit(type, value);
    setValue("");
  }

  const handleChange = (itemId: string, newValue: string) => {
    selectProps.onChange(type, itemId, newValue);
  }

  return (
    <>
      <h2>{title} - {items.reduce((c, p) => c + +p.value, 0)}</h2>
      <table className="table-auto w-full">
        <thead className="border-2 border-yellow-500">
          <tr>
            <th>Items</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="border-2 border-blue-500">
          {
            items.map((p) => (
              <tr className="h-fit border-collapse border border-blue-300 flex-1" key={p.id}>
                <td className="text-left">
                  <p className="text-pretty">{p.item}</p>
                </td>
                <td className="w-40">
                  <Select
                    value={p.value}
                    // onChange={e => selectProps.onChange({ ...e, currentItem: p.id })}
                    onChange={(e) => handleChange(p.id, e.target.value)}
                  />
                </td>
                <td className="w-20">
                  <button onClick={() => onDelete(type, p)}>
                    <TrashIcon className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <tfoot className="absolute bottom-0">
          <tr className="">
            <td colSpan={3} className="p-2">
              <form
                onSubmit={handleSubmit}
              >
                <Input
                  autoFocus={formProps.autoFocus}
                  type="text"
                  tabIndex={999}
                  name={formProps.name}
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                />
              </form>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}