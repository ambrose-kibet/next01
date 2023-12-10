// client side component
// import React from "react";
// import { useState } from "react""
'use client';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="grid max-w-sm w-full mx-auto">
      <h2 className="text-center text-xl">{count}</h2>
      <div className="w-full flex justify-between">
        <button
          className="btn btn-error"
          onClick={() => setCount((old) => old - 1)}
        >
          <FaMinus />
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCount((old) => old + 1)}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
export default Counter;
