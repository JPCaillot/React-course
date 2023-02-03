import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({ //entered as an object - alternative way
  //  enteredTitle: '',
  //  enteredAmount: '',
  //  enteredDate: '',
  //});

  //const titleChangeHandler = (event) => { // has to be done for all *Handlers anyway
  //  setUserInput({
  //      ...userInput, // so we don't lose the first userInput when React refreshes the page and substitutes State values
  //      enteredTitle: event.target.value,
  //  });
  //}; ---> not the best practice: sometimes the data will be lost anyway
  //---------------------------------------------------------------------
  //const titleChangeHandler = (event) => { ---> best practice, as the internal function of setUserInput will always save that data
  //  setUserInput((prevState) => {         ---> ANY CASE WHEN YOU DEPEND ON THE PREVIOUS STATE
  //      return {...prevState, enteredTitle: event.target.value};
  //  });
  //};
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //updates with the value of each moment another key is pressed in this input
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //stopping it from reloading as a default submit event

    const expenseData = {
      title: enteredTitle,
      amount: enteredDate,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={enteredTitle} // two-way binding - this input is tracked by titleChangeHandler, but this also tracks value within itself; it also lets the submit event clear it automatically
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
//remember to change min and max dates to put the tool into actual use

export default ExpenseForm;
