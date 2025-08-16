"use client"
import { useInsertionEffect } from "react";

const InsertionEffectExample = () => {

  useInsertionEffect(() => {

    // Create a style tag and insert dynamic CSS
    const style = document.createElement("style");
    style.textContent = `
      .dynamic-class {
        color: white;
        background-color: orange;
        padding: 10px;
      }
    `;

    document.head.appendChild(style); // our style tag is added to the head

    // Cleanup: Remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="dynamic-class">Styled with useInsertionEffect</div>;
};

export default InsertionEffectExample;

/*

// useInsertionEffect is a specialized version of useEffect that is designed
// to optimize performance by minimizing unnecessary re-renders. It is
// intended to be used in cases where the effect only needs to run once,
// similar to componentDidMount.

// For example, if you have a component that renders a map, you might use
// useInsertionEffect to load the Google Maps API only once, and then use
// useEffect to handle updates to the map when the component re-renders.
*/