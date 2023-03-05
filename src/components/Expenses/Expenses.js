import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getUTCFullYear().toString() === selectedYear;
  });

  const total = filteredExpenses.reduce((accumulator, currentValue) => { return accumulator + currentValue.amount }, 0);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <Card className="total-amount">
          <h2>Total Amount</h2>
          <div className="total-amount__total">${total}</div>
        </Card>

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
