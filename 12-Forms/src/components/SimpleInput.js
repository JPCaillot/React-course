import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //both ref and state are used here, but it would be correct to use only one
  // const nameInputRef = useRef();
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));
  
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    //and all of the other fields
    formIsValid = true;
  }
 
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetEmailInput();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      //setEnteredNameIsValid(false); not needed anymore since we are using enteredNameIsValid as not state anymore
      return; //this keeps the data from going through with the code
    }
    
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value = ''; //non ideal
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  let content;

  if (emailInputHasError && enteredEmail.trim() === "") {
    content = "E-mail must not be empty";
  } else if (emailInputHasError && !enteredEmail.includes("@")) {
    content = "E-mail must include '@'";
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          // ref={emailInputRef}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">{content}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
