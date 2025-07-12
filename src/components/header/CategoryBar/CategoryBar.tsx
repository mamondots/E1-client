import { categoryList } from "@/utilits/categoryList";
import Link from "next/link";
import React from "react";

const CategoryBar = () => {
  return (
    <div className="w-full py-2 bg-primary text-white lg:block hidden">
      <div>
        {
          <ul className="flex items-center justify-center gap-6">
            {categoryList?.slice(0, 12).map((category) => (
              <li key={category.id} className="capitalize text-sm">
                <Link href="/">{category.category}</Link>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default CategoryBar;
