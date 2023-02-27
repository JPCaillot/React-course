// import { useStore } from 'react-redux'; // {connect} for class-based components
import { useSelector, useDispatch } from 'react-redux'; //selects specific parts of the store already
import {counterActions} from '../store/counterSlice';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter); //automatic subscription by react-redux, managed by redux
  const show = useSelector(state => state.counter.showCounter);
  //whenever data changes in the store, you always get the latest state
  //if this is unmounted from the DOM, it's also automatically unsubscribed

  const incrementHandler = () => {
    // dispatch({type: 'increment'}); //without toolkit
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({type: 'increase', amount: 5});
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } if just a number is declared instead of an object, for example
  }

  const decrementHandler = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//this example would be properly handled with useState, because the states managed here are local, so this is just a demo of how Redux would work

//---------------------------------------------------

//CLASS-BASED COMPONENT EQUIVALENT:

// import {connect} from 'react-redux';
// import { Component } from 'react';

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => { // the equivalent of using useSelector hook 
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}), //for it to be accessed through props instead of hooks
//     decrement: () => dispatch({type: 'decrement'}), 
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); //connect is a higher order function > returns a function that will run with the Counter value


