"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const AddBtn = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div>
      <div className="flex items-center gap-2 mt-8">
        <div className="flex items-center justify-between border border-[#262629]/40 hover:border-primary/40 duration-300 rounded px-2 py-1 md:w-[45%] w-[30%]">
          <p
            onClick={handleDecrement}
            className="cursor-pointer text-[#262629]/40 hover:text-primary/60 duration-300"
          >
            <Plus size={16} />
          </p>
          <span>{count}</span>
          <p
            onClick={handleIncrement}
            className="cursor-pointer text-[#262629]/40 hover:text-primary/60 duration-300"
          >
            <Minus size={16} />
          </p>
        </div>
        <div className="w-full bg-primary hover:bg-secondary cursor-pointer duration-300 rounded text-white text-center py-1.5">
          <button className="text-sm outline-none cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBtn;
