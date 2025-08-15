"use client"
import { useRef } from "react";
// import TextInput, { TextInputRef } from "./TextInput";
import Counter, { CounterRef } from "./counter";

function Demo() {
    const inputRef = useRef<CounterRef>(null);

    return (
        <div className="tutorial">
            <div className="mb-2">
                <Counter ref={inputRef} />
            </div>
            <button onClick={() => inputRef.current?.reset()}>
                Reset From Parent
            </button>
        </div>
    );
}

export default Demo;
