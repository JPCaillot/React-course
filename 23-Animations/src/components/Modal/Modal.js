import React from "react";

import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = (props) => {
  return (
    <CSSTransition 
      mountOnEnter 
      unmountOnExit 
      in={props.show} 
      timeout={animationTiming}
      classNames={{ // or just a string that will append -enter -enter-active
        enterActive: 'ModalOpen',
        exitActive: 'ModalClosed', //could also have appear, appearActive
      }}
    >
        <div className='Modal'>
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>
            Dismiss
          </button>
        </div>
    </CSSTransition>
  );
};

export default modal;
