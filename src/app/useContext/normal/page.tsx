"use client"
import React, { useState } from "react";


const NormalWay = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    return (
        <div>
            <h1> Parent Component </h1>
            <ChildToggle setIsToggle={setIsToggle}/>
            <ChildDisplay isToggle={isToggle} />
        </div>
    );
};

export default NormalWay;

interface TypeAction {
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChildToggle = ( {setIsToggle } : TypeAction  ) => {
    return (
        <div>
            <button onClick={ () => setIsToggle( (prev) => !prev ) }> Toggle State</button>
        </div>
    )
}

interface ChildDisplayProps {
    isToggle: boolean;
}

const ChildDisplay = ( {isToggle}: ChildDisplayProps ) => {
    return (
        <div>
            <p>Current State : { isToggle ? 'ON' : 'OFF' }</p>
        </div>
    )
}

// Issue : props passing to child component to grand child.....
// Re-render every component when props data change