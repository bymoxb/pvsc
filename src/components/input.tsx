import { HTMLAttributes, InputHTMLAttributes } from "react";

export default function Input(props?: HTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input placeholder="Escribe algo" className="h-10 border rounded shadow w-full px-2 py-1 focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-500" {...props} />
  )
}