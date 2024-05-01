export default function ExpenseSummary({ balance, incomes, expences }) {
  return (
    <div className="bg-slate-100 w-full flex flex-col justify-start items-center">
      <h1 className="text-xl lg:text-3xl font-extralight text-center my-4">
        Expense Tracker
      </h1>

      <div className="flex flex-col justify-center py-1 lg:py-2 px-5 lg:px-10 text-center shadow-md rounded-md bg-white">
        <h2 className="text-sm text-slate-600 uppercase">Your Balance</h2>
        <h1 className="text-2xl lg:text-4xl font-semibold">{balance} €</h1>
      </div>
      <div className="mt-2 flex flex-row justify-between gap-x-1">
        <div className="text-center flex flex-col justify-center py-3 lg:py-6 px-0 lg:px-3 shadow-md rounded-l-md bg-white h-20 w-32 lg:w-48">
          <h2 className="font-light uppercase">Income</h2>
          <h1 className="text-lime-500 font-semibold text-lg lg:text-2xl">
            {incomes} €
          </h1>
        </div>

        <div className="text-center flex flex-col justify-center  py-3 lg:py-6 px-0 lg:px-3 shadow-md rounded-r-md bg-white h-20 w-32 lg:w-48">
          <h2 className="font-light uppercase">Expense</h2>
          <h1 className="text-rose-600 font-semibold text-lg lg:text-2xl">
            {expences} €
          </h1>
        </div>
      </div>
    </div>
  );
}
