"use client";

import { createContext } from "react";
import useLocalStorage from "@/hooks/use-local-storage";

export const TrackerContext = createContext(null);

export const TrackerProvider = ({ children }) => {
  const initialState = [{ id: 1, title: "Book", amount: -24 }];

  const [transactions, setTransactions] = useLocalStorage("expense-tracker", initialState);

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
    <TrackerContext.Provider
      value={{ transactions, addTransaction, deleteTransaction, reset, balance, incomes, expenses }}
    >
      {children}
    </TrackerContext.Provider>
  );
};
