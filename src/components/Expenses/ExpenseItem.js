import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const { expenseDate, expenseTitle, expenseAmount } = props.expenseItem;

  const [expenseTitle1, setTitle] = useState(expenseTitle);
  const clickHandler = () => {
    setTitle("Updated");
    console.log(`${expenseTitle1}`);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle1}</h2>
          <div className="expense-item__price">Rs {expenseAmount}</div>
        </div>

        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
