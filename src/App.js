import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      price: 1000,
      date: new Date(2000, 0, 1),
    },
    {
      title: "Car Engine",
      price: 10000,
      date: new Date(2000, 0, 1),
    },{
      title: "INSURANCE",
      price: 100,
      date: new Date(2000, 0, 1),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
