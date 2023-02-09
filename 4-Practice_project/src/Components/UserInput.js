import { useState, useRef } from "react";

import Button from './UI/Button';
import Card from './UI/Card';
import ErrorModal from "./UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";

import styles from './UserInput.module.css';

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [inputUser, setInputUser] = useState('');
  //const [inputAge, setInputAge] = useState('');

  const [error, setError] = useState();

  // const userChangeHandler = (event) => {
  //   setInputUser(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setInputAge(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = nameInputRef.current.value;
    if (enteredName.trim().length > 0 && +enteredAge > 0){ // + ensuring the data is a number
      const entry = {
        username: enteredName,
        age: enteredAge,
        nº: Math.random().toString(),
      };
      props.onAddEntry(entry);
    } else if (enteredAge.trim().length > 0 && !(+enteredAge > 0)) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (greater than 0).'
      });
    } else {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
    }
    //setInputAge('');
    //setInputUser('');
    nameInputRef.current.value = ''; //should rarely be done
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return ( //value and onChange props not needed with refs
    <Wrapper>
      {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
      <Card>
        <form className={styles.inputForm} onSubmit={submitHandler}>
          <label>Username</label>
          <input 
            value={inputUser} 
            type='text' 
            htmlFor='username' 
            onChange={userChangeHandler}
            ref={nameInputRef}>
          </input>
          <label>Age (Years)</label>
          <input 
            value={inputAge} 
            type="number" 
            htmlFor='age' 
            onChange={ageChangeHandler}
            ref={ageInputRef}>
          </input>
          <Button type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;