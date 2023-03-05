import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesTotal from "./ExpensesTotal";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getUTCFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesTotal items={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
