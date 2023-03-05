import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseActions from "./ExpenseActions";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const handleDeleteClick = () => {
    props.onDeleteExpense(props.expenseId);
  };

  const updateExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: props.expenseId,
    };

    props.onUpdateExpense(expenseData);
    setDisplayEditForm(false);
  };

  return (
    <li>
      <Card className="expense-item__card">
        <div className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div>
              <div className="expense-item__price">${props.amount}</div>
              <ExpenseActions
                onEditClick={setDisplayEditForm}
                onDeleteClick={handleDeleteClick}
              />
            </div>
          </div>
        </div>
        
        {displayEditForm && (
          <div className="expense-item__edit-form">
            <ExpenseForm
              onClickCancel={setDisplayEditForm}
              onSaveExpenseData={updateExpenseDataHandler}
              title={props.title}
              amount={props.amount}
              date={props.date}
              submitBtnText={"Update Expense"}
            />
          </div>
        )}
      </Card>
    </li>
  );
};

export default ExpenseItem;
