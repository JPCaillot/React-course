import { useState } from "react";

import useNew from "../hooks/use-new";

const BasicForm = (props) => {
  const {
    inputValue: firstName,
    hasError: firstHasError,
    inputIsValid: firstIsValid,
    inputChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    cleanupHandler: firstCleanHandler,
  } = useNew(value => value.trim() !== '');

  const {
    inputValue: lastName,
    hasError: lastHasError,
    inputIsValid: lastIsValid,
    inputChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    cleanupHandler: lastCleanHandler,
  } = useNew(value => value.trim() !== '');

  const {
    inputValue: email,
    hasError: emailHasError,
    inputIsValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    cleanupHandler: emailCleanHandler,
  } = useNew(value => value.includes('@'));

  // const [firstName, setFirstName] = useState("");
  // const [firstIsTouched, setFirstIsTouched] = useState(false);

  // const firstNameIsValid = firstName.trim() !== "";
  // const firstHasError = !firstNameIsValid && firstIsTouched;

  let formIsValid = false; //new const for the form  // and the other fields

  if (firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  }

  // const firstChangeHandler = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const firstBlurHandler = (event) => {
  //   setFirstIsTouched(true);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    
    firstCleanHandler();
    lastCleanHandler();
    emailCleanHandler();
  };

  const firstClassName = firstHasError ? "form-control invalid" : "form-control";
  const lastClassName = lastHasError ? "form-control invalid" : "form-control";
  const emailClassName = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstClassName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
          {firstHasError && <p>Please enter a valid First Name</p>}
        </div>
        <div className={lastClassName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
          />
          {lastHasError && <p>Please enter a valid Last Name</p>}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor="email">E-Mail Address</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p>Please enter a valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
