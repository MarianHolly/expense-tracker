export default function ExpenseSummary() {
  return (
    <div className="bg-slate-100 w-full flex flex-col justify-start items-center">
      <h1 className="text-3xl font-extralight text-center my-4">
        Expense Tracker
      </h1>

      <div className="flex flex-col justify-center py-2 px-10 text-center shadow-md rounded-md bg-white">
        <h2 className="text-sm text-slate-600 uppercase">Your Balance</h2>
        <h1 className="text-4xl font-semibold">100,00 €</h1>
      </div>
      <div className="mt-2 flex flex-row justify-between gap-x-1">
        <div className="text-center py-6 px-3 shadow-md rounded-l-md bg-white w-48">
          <h2 className="font-light uppercase">Income</h2>
          <h1 className="text-lime-500 font-semibold text-2xl">325,00 €</h1>
        </div>
        <div className="text-center py-6 px-3 shadow-md rounded-r-md bg-white w-48">
          <h2 className="font-light uppercase">Expense</h2>
          <h1 className="text-rose-600 font-semibold text-2xl">225,00 €</h1>
        </div>
      </div>
    </div>
  );
}
