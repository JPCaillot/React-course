import {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  //convention [name, setName]  ^always returns 2 values, current and modified
  
  const clickHandler = () => { //convention on handling with events - ends with Handler
    setTitle('Updated!')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
