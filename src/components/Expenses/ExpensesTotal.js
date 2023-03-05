import "./ExpensesTotal.css";
import Card from "../UI/Card";

const ExpensesTotal = (props) => {
  const total = props.items.reduce((accumulator, currentValue) => { return accumulator + currentValue.amount }, 0);

  return (
    <div>
      <Card className="expenses-total">
        <h2>Total Amount</h2>
        <div className="expenses-total__amount">${total}</div>
      </Card>
    </div>
  );
};

export default ExpensesTotal;
