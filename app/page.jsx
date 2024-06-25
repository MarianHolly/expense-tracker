import ExpenseForm from "@/components/expense-form";
import ExpenseHistory from "@/components/expense-history";
import ExpenseSummary from "@/components/expense-summary";

export default function Home() {
  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-y-3 gap-x-3 p-3 min-h-screen">
      <ExpenseHistory />
      <ExpenseForm />
      <ExpenseSummary />
    </main>
  );
}
