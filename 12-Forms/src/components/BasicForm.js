import { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstIsTouched, setFirstIsTouched] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";
  const firstHasError = (!firstNameIsValid && firstIsTouched);
  
  const formError = firstHasError; //new const for the form  // and the other fields

  const firstChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const firstBlurHandler = (event) => {
    setFirstIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setFirstIsTouched(true);

    if (formError) {
      return;
    }

    setFirstIsTouched(false);
    setFirstName("");
  };

  const className = firstHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={className}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
          {firstHasError && <p>Please enter a valid First Name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={formError}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
