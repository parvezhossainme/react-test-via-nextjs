"use client";
import React, { useEffect, useState } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FavHook = () => {
    const [data, setData] = useState<Post[]>([]);
    const [showPP, setShowPP] = useState(false);
    
    // Mainly use for API fetching........
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    useEffect(() => {
        console.log("Parvez Hossain");
    }, [showPP]); // On change of showPP => trigger this useEffect

    return (
        <div className="container m-20 border-1 p-10 w-fit">
            <button onClick={ () => setShowPP( (prev) => !prev ) } className="bg-blue-200 rounded p-1">
                Toggle
            </button>
            <h1 className="p-2 m-2"> Posts</h1>
            <ul>
                {data.slice(0, 5).map((item, index) => (
                    <li key={index} className="p-2 m-2 ">Title {index+1}: {item.title} </li>
                ))}
            </ul>
        </div>
    );
};

export default FavHook;
