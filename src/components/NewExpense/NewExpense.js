import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
    setEditing(false);
    console.log(expenseData);
  };

  const startEditingHandler = () => {
    console.log(`Clicked on Add new Expense Button`);
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
