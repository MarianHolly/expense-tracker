"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";

export default function ExpenseForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  function onSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      date,
    };
    setTitle("");
    setAmount(0);

    console.log(newTransaction);
    addTransaction(newTransaction);
  }

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <form
        onSubmit={onSubmit}
        className="my-3 flex flex-col gap-y-3 items-center"
      >
        <Input
          type="text"
          placeholder="Enter title for expense or income"
          className="w-96 text-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Enter amount"
          className="w-44 text-md"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-slate-100"
        />

        <Button size="lg">Add transaction</Button>
      </form>
    </div>
  );
}
