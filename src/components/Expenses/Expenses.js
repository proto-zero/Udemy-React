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

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

    return (
        <Card className="expenses">
          <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} 
          />
          {expensesContent}
        </Card>
    );
}

export default Expenses;