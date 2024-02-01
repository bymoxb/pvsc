import { ProsConsText, ProsConsValues, TypeTable } from "@/types/proscons";
import { SelectHTMLAttributes } from "react";

export default function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className="" {...props}>
      <option value={ProsConsValues.LOW}>{ProsConsText[ProsConsValues.LOW]}</option>
      <option value={ProsConsValues.MEDIUM}>{ProsConsText[ProsConsValues.MEDIUM]}</option>
      <option value={ProsConsValues.HIGH}>{ProsConsText[ProsConsValues.HIGH]}</option>
    </select>
  );
}