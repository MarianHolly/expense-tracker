"use client";

import { createContext, useReducer, useState } from "react";

// Reducer function
function trackerReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];
    case "DELETE_TRANSACTION":
      return state.filter((transaction) => transaction.id !== action.payload);
    case "RESET":
      return [];
    default:
      return state;
  }
}

const initialState = [{ id: 1, title: "Book", amount: -24 }];

export const TrackerContext = createContext(null);

export const TrackerProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(trackerReducer, initialState);

  // Actions
  const addTransaction = (newTransaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

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
