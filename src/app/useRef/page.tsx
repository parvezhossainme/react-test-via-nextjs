"use client";
import React, { useEffect, useRef, useState } from "react";

const FavHook_Ref = () => {
    const [count, setCount] = useState(0);
    const previousCount = useRef(0);

    useEffect(() => {
        console.log("page rendered for usestate");
        previousCount.current = count;
    }, [count]);
    return (
        <div className="p-10 m-10 items-center justify-center">
            <p> Count : {count} </p>
            <p> Previous Count: {previousCount.current}</p>
            <button
                onClick={() => setCount((prev) => prev + 1)}
                className="bg-blue-200 rounded p-1"
            >
                Click
            </button>
        </div>
    );
};

export default FavHook_Ref;

// Accessing the dom element and manipulating it => not re-render every time :3
// Only when count changes => the component re-renders 
// but when previousCount changes => it doesn't
