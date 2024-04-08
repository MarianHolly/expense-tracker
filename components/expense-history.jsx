import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2Icon } from "lucide-react";

export default function ExpenseHistory() {
  return (
    <div className="bg-slate-100 w-full row-span-2">
      <h2 className="text-center text-md font-light text-slate-700 uppercase my-4">
        History
      </h2>
      <div className="flex flex-col justify-center items-center gap-y-1 overflow-y-scroll">
        <Item />
      </div>
    </div>
  );
}

function Item() {
  return (
    <Card
      className={`flex flex-row justify-between items-center w-96 m-2 px-4 py-3 ${`border-r-8 border-lime-500 rounded-sm`}`}
    >
      <h2 className="text-md font-medium">Cash</h2>
      <Button variant="outline" size="sm">
        <Trash2Icon className="w-5 h-5" />
      </Button>
    </Card>
  );
}
