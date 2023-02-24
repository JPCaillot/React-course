const redux = require('redux');

const counterReducer = (prevState = {counter: 0}, action) => { //Reducer Function
    if (action.type === 'increment') {
        return {
            counter: prevState.counter + 1 // always takes previous state into account
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: prevState.counter - 1
        };
    }

    return prevState;
};

const store = redux.createStore(counterReducer); //Central Data (State) Store

const counterSubscriber = () => { //Component - subscribed to the store
    const latestState = store.getState(); //latest state snapshot after updated
    console.log(latestState);
};

store.subscribe(counterSubscriber); //letting redux know what function to execute whenever data and store change
//just pointing at the function, not executing it (will be executed by Redux)

store.dispatch({type: 'increment'}); //unique string, always 'type'
store.dispatch({type: 'decrement'});