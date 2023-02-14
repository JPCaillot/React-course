import React from "react";

import classes from "../UI/Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input} /* convenient way of copying all properties of an object as properties of the jsx element */
      />
    </div>
  );
});

export default Input;
