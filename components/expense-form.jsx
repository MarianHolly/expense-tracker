"use client";

import { useContext, useState } from "react";
import { TrackerContext } from "@/context";
import { v4 as uuidv4 } from "uuid";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ExpenseForm() {
  const { addTransaction } = useContext(TrackerContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(e) {
    e.preventDefault();
    if (title === "" || amount === 0) {
      alert("Please enter both title and amount");
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    console.log(newTransaction);
    setTitle("");
    setAmount(0);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-xl font-extrabold uppercase text-slate-900 opacity-25 my-3">Form</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-3 items-center">
        <Input
          type="text"
          value={title}
          placeholder="Enter title for expense or income"
          onChange={(e) => setTitle(e.target.value)}
          className="w-96 text-md"
        />
        <Input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
          className="w-44 text-md"
        />
        <Button size="lg" type="submit">
          Add transaction
        </Button>
      </form>
    </div>
  );
}
