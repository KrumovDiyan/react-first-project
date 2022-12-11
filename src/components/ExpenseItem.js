import "./ExpenseItem.css";

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
  return (
    <div className="expense-item">
  <div>{props.date.toISOString()}</div>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
