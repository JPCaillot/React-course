// import { createStore } from "redux"; //configureStore in the toolkit makes merging easier
import { createSlice, configureStore } from "@reduxjs/toolkit"; //createReducer could also be used, but this is more powerful
// import redux from 'redux';
// const redux = require("redux");

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  //slice of our global state
  name: "counter", //needed, value up to you
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; //in toolkit this is allowed, cause the inner workings will identify this and clone the state with the changes in an immutable way
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //the action is also in the other two, but they don't need it
      state.counter = state.counter + action.payload; //will be defined automatically
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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
    counter: counterSlice.reducer, 
    auth: authSlice.reducer 
  },
});

// THIS WILL BE DONE BY THE ACTUAL COMPONENTS:
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   return latestState;
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });

export const counterActions = counterSlice.actions; //toolkit creates those methods for us with .actions
export const authActions = authSlice.actions;

export default store; // this needs to be provided - what does 'provide' mean?
