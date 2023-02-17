import {useState} from 'react';

const useNew = (validateField) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateField(inputValue);
  const hasError = (!inputIsValid && inputIsTouched);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const cleanupHandler = (event) => {
    setInputIsTouched(false);
    setInputValue("");
  };

  return {
    inputValue,
    hasError,
    inputIsValid,
    inputChangeHandler,
    inputBlurHandler,
    cleanupHandler
  }
};

export default useNew;