import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

export default function ExpenseHistory({ transactions, deleteTransaction }) {
  // display if no incomes or expences
  if (transactions?.length === 0) {
    return (
      <div className="bg-slate-100 w-full row-span-2">
        <h2 className="text-center text-sm font-light text-slate-700 uppercase my-4">
          History
        </h2>
        <h1 className="text-center pb-8 text-lg font-extralight">
          You have no expences or incomes.
        </h1>
      </div>
    );
  }

  // display history of transactions
  return (
    <div className="bg-slate-100 w-full row-span-2">
      <h2 className="text-center text-md font-light text-slate-700 uppercase my-4">
        History
      </h2>
      <div className="flex flex-col justify-center items-center gap-y-1 overflow-y-scroll">
        {transactions?.map((tran) => (
          <Item
            key={tran.id}
            tran={tran}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </div>
    </div>
  );
}

function Item({ tran, deleteTransaction }) {
  return (
    <Card
      className={`flex flex-row justify-between items-center w-96 m-2 px-2 lg:px-4 py-1 lg:py-3 ${`border-r-8 border-lime-500 rounded-sm`}`}
    >
      <h2 className="text-sm lg:text-base font-medium">{tran.title}</h2>
      <Button
        size="sm"
        variant="outline"
        onClick={() => deleteTransaction(tran.id)}
      >
        <Trash2Icon className="w-5 h-5" />
      </Button>
    </Card>
  );
}
