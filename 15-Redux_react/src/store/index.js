import {createStore} from 'redux';
// import redux from 'redux';
// const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterReducer); //redux.createStore if redux from redux is imported

// THIS WILL BE DONE BY THE ACTUAL COMPONENTS:
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   return latestState;
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });

export default store; // this needs to be provided - what does 'provide' mean?
