"use client";
import React, { useState } from "react";

const NotUsingReducer = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center m-20">
            <p>Count: {count}</p>
            <div className="flex gap-x-2 font-semibold text-2xl">
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
        </div>
    );
};

export default NotUsingReducer;

// The same thing can be done using the useReducer hook in more efficient way
// When multiple states are needed to be managed