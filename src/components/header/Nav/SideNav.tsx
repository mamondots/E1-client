"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo/qutox.png";
import { AlignJustify, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { categoryList } from "@/utilits/categoryList";
import Link from "next/link";

const SideNav = () => {
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const toggleSubCategory = (id: number) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side="left" className="px-4 py-4">
        <div className="border-b border-[#262626]/40 pb-4">
          <Image src={logo} alt="logo" width={110} height={110} />
        </div>

        <ul className="flex flex-col gap-2 mt-4">
          {categoryList.map((category) => {
            const hasSub = category.subCategory.length > 0;
            const isOpen = openCategoryId === category.id;

            return (
              <li key={category.id} className="text-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => hasSub && toggleSubCategory(category.id)}
                >
                  <Link
                    href="/product"
                    className="capitalize text-base hover:text-primary cursor-pointer duration-300"
                  >
                    {category.category}
                  </Link>
                  {hasSub &&
                    (isOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    ))}
                </div>

                {/* Subcategory list */}
                {hasSub && isOpen && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {category.subCategory.map((sub) => (
                      <li
                        key={sub.id}
                        className="text-sm capitalize text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        <Link href="/product">{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
