import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const ExpenseItem = (props) => {
  const handleDeleteClick = () => {
    props.onDeleteExpense(props.expenseId);
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div>
            <div className="expense-item__price">${props.amount}</div>
            <div className="expense-item__actions">
              <div className="expense-item__delete" onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <div
                className="expense-item__delete"
                style={{ marginLeft: "5px" }}
                onClick={handleDeleteClick}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
