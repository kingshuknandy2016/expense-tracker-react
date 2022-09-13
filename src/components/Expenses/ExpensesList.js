import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // let expensesContent = <p>No Expense Found</p>;
  //   if (props.filteredExpenses.length > 0) {
  //     expensesContent =
  //   }

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            expenseItem={item}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
