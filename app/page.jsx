import ExpenseForm from "@/components/expense-form";
import ExpenseHistory from "@/components/expense-history";
import ExpenseSummary from "@/components/expense-summary";

export default function Home() {
  return (
    <main className="container grid grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-y-3 gap-x-3 py-6 min-h-screen bg-slate-50">
      <ExpenseSummary />
      <ExpenseHistory />
      <ExpenseForm />
    </main>
  );
}
