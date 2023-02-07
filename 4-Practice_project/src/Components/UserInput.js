import { useState } from "react";

import styles from './UserInput.module.css';

const UserInput = (props) => {
  const [inputUser, setInputUser] = useState('');
  const [inputAge, setInputAge] = useState('');

  const userChangeHandler = (event) => {
    setInputUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // check if inputs are valid
    const entry = {
      username: inputUser,
      age: inputAge,
    };
    props.onAddEntry(entry);
  };

  return (
    <div className={styles.inputForm}>
      <label>Username</label>
      <input onChange={userChangeHandler}></input>
      <label>Age (Years)</label>
      <input onChange={ageChangeHandler}></input>
      <button type="submit" onClick={submitHandler}>
        Add User
      </button>
    </div>
  );
};

export default UserInput;
