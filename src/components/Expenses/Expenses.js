import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesTotal from "./ExpensesTotal";

const Expenses = (props) => {
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getUTCFullYear().toString() === props.selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={props.selectedYear}
          onSelectYear={props.onSelectYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesTotal items={filteredExpenses} />
        <ExpensesList
          items={filteredExpenses}
          onUpdateExpense={props.onUpdateExpense}
          onDeleteExpense={props.onDeleteExpense}
        />
      </Card>
    </div>
  );
};

export default Expenses;
