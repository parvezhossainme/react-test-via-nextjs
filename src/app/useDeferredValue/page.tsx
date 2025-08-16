"use client"
import React, { useState, useDeferredValue } from "react"; // 1st => import

const DeferredValueExample = () => {
  const [query, setQuery] = useState("");

  // This for 10000 items generator
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const deferredQuery = useDeferredValue(query);  // 2nd => use the query

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase()) // 3rd => use the deferredQuery
  );

  return (
    <div className="flex flex-col items-center m-20">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
        className="p-2 border border-gray-300 rounded-md mb-4"
      />
      
      {query !== deferredQuery && <p> Loading...</p>}

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeferredValueExample;


/**
 * useDeferredValue is used when you want to defer the computation of a value until it's needed
 * It's useful when you have expensive computations that don't need to happen immediately
 * For example, animations, searches, or other time-consuming computations
 * 
 * It's similar to useMemo, but it's designed to handle the case where the value may change
 * but the computation is not needed until the next render
 * 
 * In the example above, we use useDeferredValue to defer the computation of the filteredItems array
 * until the user has finished typing the query. This is useful since computing the filteredItems array
 * can be expensive and we don't need to do it every time the query changes, only when the user is done typing
**/

