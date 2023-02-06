import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => { //here we call the function which extracts the argument from its child component
        const expenseData = { // here we store the data extracted
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData); // here we send the extracted data to its parent component by calling a function from there via props with data from this component as an argument
    };

    const [isEditing, setIsEditing] = useState(false);

    const isEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className='new-expense'>
        {isEditing && <ExpenseForm 
                onCancel={stopEditingHandler} 
                onSaveExpenseData={saveExpenseDataHandler} />}
        {!isEditing && <button onClick={isEditingHandler}>
            Add new expense
        </button>}
    </div>
}; // onSaveExpenseData is built into the on* convention to show it'll be a function on the child Component

export default NewExpense;