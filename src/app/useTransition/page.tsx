// use to handles non-urgent updates
// prioritized some other component updates
"use client";
import React, { useState, useTransition } from "react";

const TransitionExample = () => {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState<string[]>([]);

    // two params isPending and startTransition
    const [isPending, startTransition] = useTransition();

    // This for 10000 items generator
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        // const filtered = items.filter((item) =>
        //     item.toLowerCase().includes(value.toLowerCase())
        // );
        // setFilteredItems(filtered);
        
        // wrap aboved code on useTransition ---------------------------
        startTransition(() => {
            const filtered = items.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };

    return (
        <div className="flex flex-col items-center m-20">
            <input
                type="text"
                value={query}
                onChange={handleFilter}
                placeholder="Search items..."
                className="p-2 border border-gray-300 rounded-md mb-3"
            />

            {isPending && <p> Loading...</p>}
            {/* Above use for loading transition */}

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TransitionExample;

/*
// Write it when you want to handle non-urgent updates
// So that it doesn't block the UI from updating
// But it will not wait for the task to complete
// So use it when you don't care about the result
*/