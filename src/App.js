import Expenses from "./components/Expenses/Expenses";


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
    },
  ];

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
