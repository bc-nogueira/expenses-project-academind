import "./MonthSummary.css";

const MonthSummary = (props) => {
  return (
    <div className="month-summary">
      <div className="month-summary__title">{props.month}</div>
      <div className="month-summary__amount">${props.monthTotal.toFixed(2)}</div>
    </div>
  );
};

export default MonthSummary;
