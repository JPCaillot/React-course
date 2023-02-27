import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions; //toolkit creates those methods for us with .actions

export default counterSlice.reducer; //the proper way would be to export counterSlice.reducer