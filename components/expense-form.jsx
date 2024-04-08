"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ExpenseForm() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(e) {
    e.preventDefault();

    const newTransaction = {};
  }

  return (
    <div className="bg-slate-100 w-full flex flex-col justify-start items-center">
      <h2 className="text-center text-md text-slate-600 uppercase my-4">
        Form
      </h2>
      <form
        onSubmit={onSubmit}
        className="my-3 flex flex-col gap-y-3 items-center"
      >
        <Input
          type="text"
          placeholder="Enter title for expense or income"
          className="w-96 text-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Enter amount"
          className="w-44 text-md"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button size="lg">Add transaction</Button>
      </form>
    </div>
  );
}
