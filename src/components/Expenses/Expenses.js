import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };

    return (
        <Card className="expenses">
          <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
          />
          {props.items.map((expense) => (
            <ExpenseItem 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date} 
            />
          ))}
        </Card>
    );
}

export default Expenses;