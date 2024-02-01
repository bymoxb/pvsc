"use client"
import Table from "@/components/table";
import { ProsCons, ProsConsTable, ProsConsValues, TypeTable } from "@/types/proscons";
import { useState } from "react";

const MOCK: ProsConsTable = {
  subject: "CREAR UNA WEB DE PROS Y CONTRAS",
  pros: [
    {
      id: "1",
      item: "Mejorar la habilidad con NEXTJS",
      value: ProsConsValues.HIGH,
    },
    {
      id: "2",
      item: "Tener un portafolio más amplio",
      value: ProsConsValues.HIGH,
    },
    {
      id: "3",
      item: "Aprender sobre despliegues serverless",
      value: ProsConsValues.HIGH,
    },
    {
      id: "4",
      item: "Aprender sobre SUPABASE",
      value: ProsConsValues.MEDIUM,
    },
  ],
  cons: [
    {
      id: "5",
      item: "Programar mas a parte del trabajo",
      value: ProsConsValues.LOW,
    },
    {
      id: "6",
      item: "No me gusta hacer el diseño",
      value: ProsConsValues.MEDIUM,
    }
  ],
};

const MOCK_EMPTY: ProsConsTable = {
  subject: "",
  pros: [],
  cons: [],
};

export default function Home() {

  const [data, setData] = useState<ProsConsTable>(MOCK_EMPTY);

  const handleSumbit = (type: TypeTable, value: string) => {
    if (type == TypeTable.PROS) {
      setData(p => ({ ...p, pros: [...p.pros, { id: Math.random().toString(), item: value, value: ProsConsValues.MEDIUM }] }));
    } else if (type == TypeTable.CONS) {
      setData(p => ({ ...p, cons: [...p.cons, { id: Math.random().toString(), item: value, value: ProsConsValues.MEDIUM }] }));
    }
  }

  const handleChangeValue = (type: TypeTable, itemId: string, newValue: string) => {
    if (type == TypeTable.PROS) {
      setData(p => ({
        ...p,
        pros: p.pros.map<ProsCons>(e => {
          if (e.id === itemId) {
            return {
              ...e,
              value: newValue as ProsConsValues,
            }
          }

          return e;
        })
      }))
    } else if (type == TypeTable.CONS) {

      setData(p => ({
        ...p,
        cons: p.cons.map<ProsCons>(e => {
          if (e.id === itemId) {
            return {
              ...e,
              value: newValue as ProsConsValues,
            }
          }

          return e;
        })
      }))
    }
  }

  const handleDelete = (type: TypeTable, item: ProsCons) => {
    if (type === TypeTable.PROS) {
      setData((prev) => ({
        ...prev,
        pros: prev.pros.filter(i => i.id != item.id),
      }));
    } else if (type === TypeTable.CONS) {
      setData((prev) => ({
        ...prev,
        cons: prev.cons.filter(i => i.id != item.id),
      }));
    }
  }

  return (
    <section className="container mx-auto border h-full text-center grid grid-cols-2">
      <div className="border">
        <Table
          type={TypeTable.PROS}
          title="PROS"
          items={data.pros}
          selectProps={{
            onChange: handleChangeValue,
          }}
          onDelete={handleDelete}
          formProps={{
            autoFocus: true,
            name: "pros",
            onSubmit: handleSumbit,
          }}
        />
      </div>
      <div className="border">
        <Table
          type={TypeTable.CONS}
          title="CONS"
          items={data.cons}
          selectProps={{
            onChange: handleChangeValue,
          }}
          onDelete={handleDelete}
          formProps={{
            name: "cons",
            onSubmit: handleSumbit,
          }}
        />
      </div>
    </section>
  );
}
