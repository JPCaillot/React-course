import {useState} from 'react';

import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (    
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onFilterChange={filterChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

//{filteredExpenses.length === 0 && <p>No expenses found.</p>} --- alternative to line 38, without declaring expensesContent or using the if statement.
//{filteredExpenses.length > 0 && 
//  filteredExpenses.map(expense => ( 
//    <ExpenseItem 
//      key={expense.id} 
//      title={expense.title}
//      amount={expense.amount}
//      date={expense.date}
//    />
//  ))};

export default Expenses;
