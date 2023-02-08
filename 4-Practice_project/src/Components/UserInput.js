import { useState } from "react";

import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from "./UI/ErrorModal";

import styles from './UserInput.module.css';

const UserInput = (props) => {
  const [inputUser, setInputUser] = useState('');
  const [inputAge, setInputAge] = useState('');

  const [error, setError] = useState();

  const userChangeHandler = (event) => {
    setInputUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputUser.trim().length > 0 && +inputAge > 0){ // + ensuring the data is a number
      const entry = {
        username: inputUser,
        age: inputAge,
        nº: Math.random().toString(),
      };
      props.onAddEntry(entry);
    } else if (inputAge.trim().length > 0 && !(+inputAge > 0)) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than 0).'
      });
      // call age invalid
    } else {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      // call blank fields
    }
    setInputAge('');
    setInputUser('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card>
        <form className={styles.inputForm} onSubmit={submitHandler}>
          <label>Username</label>
          <input value={inputUser} type='text' htmlFor='username' onChange={userChangeHandler}></input>
          <label>Age (Years)</label>
          <input value={inputAge} type="number" htmlFor='age' onChange={ageChangeHandler}></input>
          <Button type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;