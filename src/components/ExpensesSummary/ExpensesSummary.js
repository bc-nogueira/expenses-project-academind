import "./ExpensesSummary.css";
import Card from "../UI/Card";
import YearSummary from "./YearSummary";

const ExpensesSummary = (props) => {
  const groupByYear = (array) => {
    return array.reduce((group, obj) => {
      const year = obj.date.getFullYear();
      group[year] = group[year] ?? [];
      group[year].push(obj);
      return group;
    },
    {});
  };

  const groupByMonth = (array) => {
    return array.reduce((group, obj) => {
      const month = obj.date.toLocaleString("en-US", { month: "long" });
      group[month] = group[month] ?? [];
      group[month].push(obj);
      return group;
    },
    {});
  };

  let expensesSummary = {};

  Object.entries(groupByYear(props.items)).forEach(([year, yearExpenses]) => {
    const yearTotal = yearExpenses.reduce((acc, exp) => { return acc + exp.amount }, 0);
    expensesSummary[year] = { yearTotal: yearTotal, "monthly": {} };

    Object.entries(groupByMonth(yearExpenses)).forEach(([month, monthExpenses]) => {
      const monthTotal = monthExpenses.reduce((acc, exp) => { return acc + exp.amount }, 0);
      expensesSummary[year]["monthly"][month] = monthTotal;
    })
  });

  return (
    <div>
      <Card className="expenses-summary">
        <h1 style={{ color: "#fff" }}>Summary</h1>

        {Object.entries(expensesSummary).map(([year, yearSummary]) => {
          return <YearSummary key={year} year={year} yearSummary={yearSummary} />;
        })}
      </Card>
    </div>
  );
};

export default ExpensesSummary;
