import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div className="bg-gradient-to-r from-gray-300 to-amber-100 flex flex-col items-center justify-center min-h-screen">
            <div className="container m-20 p-10 bg-white w-fit">
                <h1 className="text-5xl font-bold text-center">Learning the React Hook Againnnnnn..</h1>
                <div className="flex flex-wrap justify-center mt-10">
                    <Link href={"/useContext"} className="p-4 m-4 bg-amber-300 rounded-lg">
                        Use Context
                    </Link>
                    <Link href={"/useState"} className="p-4 m-4 bg-amber-300 rounded-lg">
                        Use State
                    </Link>
                    <Link href={"/useEffect"} className="p-4 m-4 bg-amber-300 rounded-lg">
                        Use Effect
                    </Link>
                    <Link href={"/useReducer"} className="p-4 m-4 bg-amber-300 rounded-lg">
                        Use Reducer 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

