import {render} from 'react-dom';
import {Provider} from 'redux';
import {connect} from 'react-redux';

const redux = require('redux');

const counterReducer = (prevState, action) => { //Reducer Function
    return {
        counter: prevState.counter + 1 // always takes previous state into account
    };
};

const store = redux.createStore(counterReducer); //Central Data (State) Store

const counterSubscriber = () => { //Component - subscribed to the store
    const latestState = store.getState(); //latest state snapshot after updated
    console.log(latestState);
};

store.subscribe(counterSubscriber); //letting redux know what function to execute whenever data and store change
//just pointing at the function, not exectuing it (will be executed by Redux)
