"use client";

import { useState } from "react";

import ExpenseForm from "@/components/expense-form";
import ExpenseHistory from "@/components/expense-history";
import ExpenseSummary from "@/components/expense-summary";

export default function Home() {
  // transactions
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Book", amount: -24 },
  ]);

  // adding transaction (income or expense)
  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }
  // deleting transaction
  function deleteTransaction(id) {
    setTransactions()
  }

  // balance
  const balance = 100;
  // incomes
  const incomes = 170;
  // expences
  const expences = -70;

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-y-3 gap-x-3 p-3 min-h-screen">
      <ExpenseSummary 
        balance={balance} 
        incomes={incomes} 
        expences={expences} />
      <ExpenseHistory
        transactions={transactions}
        deleteTransaction={deleteTransaction} />
      <ExpenseForm 
        addTransaction={addTransaction} />
    </main>
  );
}
