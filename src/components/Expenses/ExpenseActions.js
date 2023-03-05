import "./ExpenseActions.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"

const ExpenseActions = (props) => {
  return (
    <div className="expense-actions__actions">
      <div
        className="expense-actions__icon expense-actions__edit"
        onClick={() => props.onEditClick(true)}
      >
        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
      </div>
      <div
        className="expense-actions__icon expense-actions__delete"
        onClick={props.onDeleteClick}
      >
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </div>
    </div>
  );
};

export default ExpenseActions;
