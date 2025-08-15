"use client";
import React, { createContext, useContext, useState } from "react";

// -----------------------------------------------------------------
interface ContextType {
    isToggle: boolean;
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialState: ContextType = {
    isToggle: false,
    setIsToggle: () => {},
};
const GlobalStateContext = createContext<ContextType>(initialState);

// -----------------------------------------------------------------

const FavHook2 = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    return (
        <GlobalStateContext value={{ isToggle, setIsToggle }}>
            <div className="container m-20 border-1 p-10 w-fit">
                <h1> Parent Component </h1>
                <ChildToggle />
                <ChildDisplay />
            </div>
        </GlobalStateContext>
    );
};

export default FavHook2;

const ChildToggle = () => {
    const { setIsToggle } = useContext(GlobalStateContext);
    return (
        <div>
            <button
                onClick={() => setIsToggle((prev) => !prev)}
                className="bg-blue-200 rounded p-1"
            >
                Toggle State
            </button>
        </div>
    );
};

const ChildDisplay = () => {
    const { isToggle } = useContext(GlobalStateContext);
    return (
        <div>
            <p>Current State : {isToggle ? "ON" : "OFF"}</p>
        </div>
    );
};

// Issue Solved: props passing to child component to grand child without params issue
