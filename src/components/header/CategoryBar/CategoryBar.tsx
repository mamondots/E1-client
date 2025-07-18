import { categoryList } from "@/utilits/categoryList";
import Link from "next/link";
import React from "react";

const CategoryBar = () => {
  return (
    <div className="w-full py-2 bg-primary text-white lg:block hidden">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center gap-6">
          {categoryList?.slice(0, 12).map((category) => (
            <li key={category.id} className="relative group capitalize text-sm">
              <Link href="/product" className="hover:underline">
                {category.category}
              </Link>

              {category.subCategory.length > 0 && (
                <ul className="absolute left-0 mt-2 w-50 z-50 bg-primary text-white rounded-b shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                  {category.subCategory.map((sub) => (
                    <li
                      key={sub.id}
                      className="border-b border-[#262626]/10 last:border-0"
                    >
                      <Link
                        href="/product"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-black capitalize"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryBar;
