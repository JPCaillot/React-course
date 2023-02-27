// import { createStore } from "redux"; //configureStore in the toolkit makes merging easier
import { createSlice, configureStore } from "@reduxjs/toolkit"; //createReducer could also be used, but this is more powerful
// import redux from 'redux';
// const redux = require("redux");

import counterReducer from './counterSlice';

import authReducer from './authSlice';

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // as there are many if statements we could use switch case here

//     //THIS SHOULD NEVER BE DONE:
//     // state.counter++;

//     // return state;
//     //NEVER CHANGE ORIGINAL STATE, ALWAYS OVERWRITE IT, SO IT DOESN'T LEAD TO BUGS OR UNPREDICTABLE BEHAVIOR

//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter, //redux won't merge changes with existing state, so this is needed
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount, // dynamic reducer adding extra properties
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer); //redux.createStore if redux from redux is imported
// const store = createStore(counterSlice.reducer); //not viable for many reducers

const store = configureStore({
  // reducer: counterSlice.reducer // for many reducers, this could be an object, uniting them in a single object
  reducer: { 
    counter: counterReducer, 
    auth: authReducer 
  },
});

// THIS WILL BE DONE BY THE ACTUAL COMPONENTS:
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   return latestState;
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });

export default store; // this needs to be provided - what does 'provide' mean?
