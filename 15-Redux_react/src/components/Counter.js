// import { useStore } from 'react-redux'; // {connect} for class-based components
import { useSelector, useDispatch } from 'react-redux'; //selects specific parts of the store already

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter); //automatic subscription by react-redux, managed by redux
  //whenever data changes in the store, you always get the latest state
  //if this is unmounted from the DOM, it's also automatically unsubscribed

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

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


