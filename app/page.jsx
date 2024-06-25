"use client";

import ExpenseForm from "@/components/expense-form";
import ExpenseHistory from "@/components/expense-history";
import ExpenseSummary from "@/components/expense-summary";

export default function Home() {
  // transactions
  const transactions = [{ id: 1, title: "Book", amount: -24 }];

  // adding transaction (income or expense)
  function addTransaction() {}
  // deleting transaction
  function deleteTransaction() {}
  // reset tracker
  function reset(){}

  // balance
  const balance = 100;
  // incomes
  const incomes = 170;
  // expences
  const expences = -70;

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-y-3 gap-x-3 p-3 min-h-screen">
      <ExpenseSummary balance={balance} incomes={incomes} expences={expences} reset={reset} />
      <ExpenseHistory
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <ExpenseForm addTransaction={addTransaction} />
    </main>
  );
}