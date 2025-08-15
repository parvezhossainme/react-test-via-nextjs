"use client";
import React, { useState } from "react";

const StateExample = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prev) => prev + 1);

        console.log(count);
    };

    return (
        <div className="container m-20 border-1 p-10 items-center justify-center w-max">
            <p> Count: {count} </p>
            <button
                onClick={increaseCount}
                className="bg-green-300 rounded p-1"
            >
                Increase Counter
            </button>
        </div>
    );
};

export default StateExample;
