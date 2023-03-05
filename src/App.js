import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpensesSummary from "./components/ExpensesSummary/ExpensesSummary";
import NavButtons from "./components/UI/NavButtons";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [displaySummary, setDisplaySummary] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2020");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setSelectedYear(expense.date.getFullYear().toString());
  };

  const updateExpenseHandler = (updatedExpense) => {
    setExpenses((prevState) => {
      return prevState.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense)
    });
    setSelectedYear(updatedExpense.date.getFullYear().toString());
  };

  const removeExpenseHandler = (expenseId) => {
    setExpenses((prevState) => {
      return prevState.filter((expense) => expense.id !== expenseId)
    });
  };

  return (
    <div>
      <NavButtons displaySummary={displaySummary} onNavClick={setDisplaySummary} />
      
      {displaySummary && <ExpensesSummary items={expenses} />}

      {!displaySummary && (
        <>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses
            items={expenses}
            onUpdateExpense={updateExpenseHandler}
            onDeleteExpense={removeExpenseHandler}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />
        </>
      )}
    </div>
  );
};

export default App;
