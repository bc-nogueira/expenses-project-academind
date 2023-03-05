import { useState } from "react";
import "./YearSummary.css";
import Card from "../UI/Card";
import MonthSummary from "./MonthSummary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const YearSummary = (props) => {
  const [displayMonthSummary, setDisplayMonthSummary] = useState(false);
  const [caret, setCaret] = useState(<FontAwesomeIcon icon={faCaretRight} size="2x" />);

  const test = () => {
    if (displayMonthSummary) {
      setCaret(<FontAwesomeIcon icon={faCaretRight} size="2x" />);
      setDisplayMonthSummary(false);
    } else {
      setCaret(<FontAwesomeIcon icon={faCaretDown} size="2x" />);
      setDisplayMonthSummary(true);
    }
  };

  return (
    <Card className="year-summary">
      <div className="year-summary__info">
        <div className="year-summary__label" onClick={test}>
          <div>{caret}</div>
          <h2>{props.year}</h2>
        </div>
        
        <div className="year-summary__amount">${props.yearSummary.yearTotal.toFixed(2)}</div>
      </div>
      
      {displayMonthSummary && (
        <div className="year-summary__month">
          {Object.entries(props.yearSummary["monthly"]).map(([month, monthTotal]) => {
            return <MonthSummary key={`${props.year}${month}`} month={month} monthTotal={monthTotal} />;
          })}
        </div>
      )}
    </Card>
  );
};

export default YearSummary;
