import { create } from "zustand";

const useTrackerStore = create((set) => {
  const initialState = [{ id: 1, title: "Book", amount: -24 }];

  return {
    transactions: initialState,
    addTransaction: (newTransaction) =>
      set((state) => ({
        transactions: [...state.transactions, newTransaction],
      })),
    deleteTransaction: (id) =>
      set((state) => ({
        transactions: state.transactions.filter((transaction) => transaction.id !== id),
      })),
    reset: () => set({ transactions: [] }),
    getBalance: () =>
      useTrackerStore
        .getState()
        .transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
    getIncomes: () =>
      useTrackerStore
        .getState()
        .transactions.filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0),
    getExpenses: () =>
      useTrackerStore
        .getState()
        .transactions.filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0),
  };
});

export default useTrackerStore;
