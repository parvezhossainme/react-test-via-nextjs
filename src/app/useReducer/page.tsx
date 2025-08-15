"use client";
import React, { useReducer } from "react";

interface reducerStateType {
    count: number
}

type CounterAction ={ 
    type: "increment" | "decrement" | "double";
}

const reducer = ( state : reducerStateType, action : CounterAction ) => {
    switch(action.type) {
        case "increment": 
            return { count: state.count +1}
        case "decrement":
            return { count: state.count -1}
        case "double":
            return { count: state.count *2}
        default:
            return state;
    }
}

const UsingReducer = () => {
    // const [ currentState, dispatch the action type] = useReducer( functionName, initialState )
    const [state, dispatch] = useReducer(reducer, { count: 0});
    return (
        <div className="flex flex-col items-center m-20">
            <p>Count: {state.count}</p>
            <div className="flex gap-x-2 font-semibold text-2xl">
                <button onClick={() => dispatch({ type: "increment" })}>+</button>
                <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                <button onClick={() => dispatch({type: "double"})}>*</button>
                {/* here => actions are done by the reducer function and sent via the dispatch function */}
            </div>
        </div>
    );
};

export default UsingReducer;

/*
Explanation: const [state, dispatch] = useReducer(reducer, { count: 0 });
This line uses React’s useReducer hook to manage component state with a reducer function.

state: The current state value managed by the reducer. Here it will start as { count: 0 }.

dispatch: A function used to send “actions” to the reducer to update the state.

reducer: A function you defined that takes (state, action) and returns the next state based on action.type.

{ count: 0 }: The initial state passed to useReducer.
*/

/*
 Reducer Function => The reducer must always return a full state object of the same shape, 
 not a primitive (e.g., don’t return state.count in default; return state).
*/