import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

const dummyData = [
  {
    id: "e1",
    expenseDate: new Date(2022, 7, 17),
    expenseTitle: "Bike EMI",
    expenseAmount: 2000,
  },
  {
    id: "e2",
    expenseDate: new Date(2019, 5, 12),
    expenseTitle: "House Rent",
    expenseAmount: 15000,
  },
  {
    id: "e3",
    expenseDate: new Date(2021, 7, 14),
    expenseTitle: "Personal Expense",
    expenseAmount: 5000,
  },
  {
    id: "e4",
    expenseDate: new Date(2022, 7, 18),
    expenseTitle: "Trip",
    expenseAmount: 200,
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    console.log("Inside App!!!");
    console.log(expense);

    setExpenses((prevState) => {
      return [
        {
          id: expense.id,
          expenseDate: new Date(expense.enteredDate),
          expenseTitle: expense.enteredTitle,
          expenseAmount: expense.enteredAmount,
        },
        ...prevState,
      ];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets Gets Started"),
  //   React.createElement(Expenses, {})
  // );
}

export default App;
