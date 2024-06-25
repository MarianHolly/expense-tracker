"use client";

import ExpenseForm from "@/components/expense-form";
import ExpenseHistory from "@/components/expense-history";
import ExpenseSummary from "@/components/expense-summary";
import { useState } from "react";

export default function Home() {
  // transactions
  const initialState = [{ id: 1, title: "Book", amount: -24 }];
  const [transactions, setTransactions] = useState(initialState);

  // adding transaction (income or expense)
  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
  // deleting transaction
  function deleteTransaction(id) {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  }
  // reset tracker
  function reset() {
    setTransactions([]);
  }

  // Calculate balance, incomes, and expenses
  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const incomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-y-3 gap-x-3 p-3 min-h-screen">
      <ExpenseHistory transactions={transactions} deleteTransaction={deleteTransaction} />
      <ExpenseForm addTransaction={addTransaction} />
      <ExpenseSummary balance={balance} incomes={incomes} expenses={expenses} reset={reset} />
    </main>
  );
}
