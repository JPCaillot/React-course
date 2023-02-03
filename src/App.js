//import React from 'react'; --old way: it needed this import in all JSX-using files
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//Alternative way (arrow function)
//const App = () => {
// the function  
//}
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  // old React way of doing this:
  // return React.createElement(
  //  'div',
  //  {},
  //  React.createElement('h2', {}, "Let's get started!"),
  //  React.createElement(Expenses, {items: expenses});
  // );
  // Arguments of createElement(): element, properties, content, [content1, content2...]

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div> //desired target state - JSX
  );
}

export default App;
