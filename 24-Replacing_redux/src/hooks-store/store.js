//THIS IS A GENERIC FILE, it can be copied for another project
import { useState, useEffect } from "react";

//managing the data outside the custom hook
//will allow us to share data as well as logic
let globalState = {}; 

let listeners = []; 
//this is the "CATCH", allows us to update all components using this hook to get the updated infos

let actions = {};
//will be global in the hook, not recreated when useStore is called,
//and so, the useState in it

export const useStore = (shouldListen = true) => {
    //argument for optimization = avoiding unchanging items to re-render

    const setState = useState(globalState)[1];
    // it's not captured by the IDE when extracted like this, 
    //but it's the function

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        // a[b] another way of identifying an object key
        //same logic of the reducer, gets an action, checks it
        //and returns new state
        //payload there just makes sure additional info can be passed

        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
            //listeners is filled with setState functions
            //the component will re-render with updated globalState
        }
    };

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        } // cleanup function, will take off the addition 
        //when the component unmounts

    }, [setState, shouldListen]);
    // this function will never change, so the only time this runs
    // is when the component runs for the first time

    return [globalState, dispatch];
    //just like useReducer, but this one is not suited
    //for managing state ACROSS components
};

//now we need a way of setting initial values for that shared data
export const initStore = (userActions, initialState) => {
    if (initialState) { //not null
        globalState = { ...globalState, ...initialState };
        //as it's shared across many components,
        //we need to keep 'old' information there
    }
    actions = { ...actions, ...userActions };
};
