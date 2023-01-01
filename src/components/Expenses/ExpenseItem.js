import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
/* 
- NOT HARDCODED DATA EXAPMPLE

function ExpenseItem() {
  const expenseDate = new Date(2022,12,1);
  const expenseName = "Car Parts";
  const expensePrice = "299$";



  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description ">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;*/

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('new value');
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}
export default ExpenseItem;
