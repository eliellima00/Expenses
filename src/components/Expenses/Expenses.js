import Card from "../UI/Card";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  //Passed by parent 'App'
  const items = props.items;

  //manage ExpenseFilter
  const setFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //I use the receive items for make a filter earlier render items in the page
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSetFilter={setFilterHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
