import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text'></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Button</label>
          <input type='button'></input>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
