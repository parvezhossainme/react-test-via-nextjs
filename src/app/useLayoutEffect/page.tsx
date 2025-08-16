"use client";
import { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectExample = () => {
    const [boxWidth, setBoxWidth] = useState(0);
    //   const boxRef = useRef(null);
    const boxRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        // Measure the width of the box immediately after rendering
        if (boxRef.current) {
            setBoxWidth(boxRef.current.offsetWidth);
        }
    },[]); // [] => run only once on the first render

    return (
        <div>
            <div
                ref={boxRef}
                style={{
                    width: "50%",
                    height: "100px",
                    backgroundColor: "lightblue",
                    color: "black",
                }}
            >
                Resize me!
            </div>
            <p>The box width is: {boxWidth}px</p>
        </div>
    );
};

export default LayoutEffectExample;

/*
// useEffect will run after the browser has painted the screen
// useLayoutEffect will run after the browser has painted the screen but-
// -but it will pause the browser's rendering to ensure the effect is applied
// useLayoutEffect is async and can cause a small delay in rendering
// If you want to run something before the browser repaints the screen, use useLayoutEffect
// If you want to run something after the browser repaints the screen, use useEffect
*/
