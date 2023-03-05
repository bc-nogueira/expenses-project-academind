import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={() => setDisplayForm(true)}>Add New Expense</button>
      )}

      {displayForm && (
        <ExpenseForm
          onClickCancel={setDisplayForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
