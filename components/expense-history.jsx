"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";
import useTrackerStore from "@/store";

export default function ExpenseHistory() {
  const { transactions, deleteTransaction } = useTrackerStore();

  // display if no incomes or expences
  if (transactions?.length === 0) {
    return (
      <div className="bg-slate-100 w-full row-span-2">
        <h1 className="text-xl font-extrabold uppercase text-slate-900 opacity-45 my-3 text-center">
          History
        </h1>
        <h1 className="text-center pb-8 text-lg font-extralight">
          You have no expences or incomes.
        </h1>
      </div>
    );
  }

  // display history of transactions
  return (
    <div className="bg-slate-100 w-full row-span-2">
      <h1 className="text-xl font-extrabold uppercase text-slate-900 opacity-25 my-3 text-center">
        History
      </h1>
      <div className="flex lg:flex-col flex-wrap justify-center items-center gap-y-1 overflow-y-scroll">
        {transactions?.map((tran) => (
          <Item key={tran.id} tran={tran} deleteTransaction={deleteTransaction} />
        ))}
      </div>
    </div>
  );
}

function Item({ tran, deleteTransaction }) {
  return (
    <Card
      key={tran.id}
      className={`flex flex-row justify-between items-center w-96 m-2 px-2 lg:px-4 py-1 lg:py-2 rounded-sm ${
        tran.amount >= 0 ? "border-r-8 border-green-500" : "border-r-8 border-red-500"
      }`}
    >
      <h2 className="text-sm lg:text-base font-medium">{tran.title}</h2>
      <div className="flex flex-row items-center">
        <h4 className="mr-4 text-slate-400">{tran.amount} €</h4>
        <Button size="sm" variant="outline" onClick={() => deleteTransaction(tran.id)}>
          <Trash2Icon className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
