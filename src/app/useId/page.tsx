"use client";
import { useId } from "react";

const UseIdExample = () => {
  const id = useId();
  const id2 = useId();

  // now using id what can be done here?


  return (
    <div>
      <label htmlFor={id}>Enter your name:</label>
      <input id={id} type="text" />

      <label htmlFor={id2}>Enter your pass:</label>
      <input id={id2} type="pass" />
    </div>
  );
};

export default UseIdExample;

/* 
// useId is used when you want to generate unique ids for HTML elements
// But you don't want to manually generate and manage the ids
// useId is used to get a unique id for a component
// Every time you use useId in a component, it will generate a new unique id
// The same id will not be generated again
*/