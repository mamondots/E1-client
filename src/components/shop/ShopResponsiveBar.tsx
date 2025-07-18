"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Funnel, Minus, Plus } from "lucide-react";
import { brandList } from "@/utilits/brandList";
import { categoryList } from "@/utilits/categoryList";

const ShopResponsiveBar = () => {
  const [showAll, setShowAll] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [collapsed2, setCollapsed2] = useState(false);
  const [collapsed3, setCollapsed3] = useState(false);
  const [collapsed4, setCollapsed4] = useState(false);
  const [collapsed5, setCollapsed5] = useState(false);

  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [defaultSubCategory, setDefaultSubCategory] = useState<string>("");

  const visibleCategories = showAll ? categoryList : categoryList.slice(0, 5);

  // Automatically select the first category and its first subcategory on initial render
  useEffect(() => {
    if (categoryList.length > 0) {
      setActiveCategoryId(categoryList[0].id);
      setDefaultSubCategory(categoryList[0].subCategory?.[0]?.title || "");
    }
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategoryId(categoryId);
    const category = categoryList.find((cat) => cat.id === categoryId);
    const firstSub = category?.subCategory?.[0]?.title || "";
    setDefaultSubCategory(firstSub);
  };
  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <p className="inline-flex items-center gap-1 bg-primary hover:bg-secondary cursor-pointer duration-300 text-white px-2 py-1 rounded">
            <span>
              <Funnel size={16} />
            </span>
            <span className="text-sm capitalize">filter</span>
          </p>
        </SheetTrigger>
        <SheetContent side="left" className="px-4 py-4 overflow-y-scroll">
          <div>
            {/* Categories Section */}
            <div className="border border-primary/20 p-6 rounded-sm">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
              >
                <h2 className="text-base font-medium text-primary">
                  Categories
                </h2>
                {collapsed ? <Plus size={18} /> : <Minus size={18} />}
              </div>

              {!collapsed && (
                <div className="flex flex-col gap-2 mt-2">
                  {visibleCategories.map((category) => (
                    <ul key={category.id}>
                      <li
                        onClick={() => handleCategoryClick(category.id)}
                        className={`text-sm capitalize cursor-pointer hover:text-primary duration-300 ${
                          activeCategoryId === category.id ? "text-primary" : ""
                        }`}
                      >
                        {category.category}
                      </li>
                    </ul>
                  ))}

                  {categoryList.length > 5 && (
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="text-sm text-primary hover:underline w-fit duration-300 cursor-pointer"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Subcategories Section */}
            <div className="border border-primary/20 p-6 rounded-sm mt-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setCollapsed2(!collapsed2)}
              >
                <h2 className="text-base font-medium text-primary">
                  Sub Category
                </h2>
                {collapsed2 ? <Plus size={18} /> : <Minus size={18} />}
              </div>

              {!collapsed2 && activeCategoryId !== null && (
                <div className="flex flex-col gap-2 mt-2">
                  {categoryList
                    .find((cat) => cat.id === activeCategoryId)
                    ?.subCategory.map((subCat) => (
                      <div
                        key={subCat.id}
                        className={`text-sm capitalize cursor-pointer hover:text-primary duration-300 ${
                          subCat.title === defaultSubCategory ? "" : ""
                        }`}
                      >
                        {subCat.title}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* brand Section */}
            <div className="border border-primary/20 p-6 rounded-sm mt-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setCollapsed3(!collapsed3)}
              >
                <h2 className="text-base font-medium text-primary">Brand</h2>
                {collapsed3 ? <Plus size={18} /> : <Minus size={18} />}
              </div>

              {!collapsed3 && activeCategoryId !== null && (
                <div className="flex flex-col gap-2 mt-2">
                  {brandList?.slice(0, 5).map((brand) => (
                    <div
                      key={brand.id}
                      className={`text-sm capitalize cursor-pointer hover:text-primary duration-300 ${
                        brand.title === defaultSubCategory ? "" : ""
                      }`}
                    >
                      {brand.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* size Section */}
            <div className="border border-primary/20 p-6 rounded-sm mt-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setCollapsed4(!collapsed4)}
              >
                <h2 className="text-base font-medium text-primary">Size</h2>
                {collapsed4 ? <Plus size={18} /> : <Minus size={18} />}
              </div>

              {!collapsed4 && activeCategoryId !== null && (
                <div className="flex flex-wrap gap-2 mt-2 capitalize text-sm list-none">
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    s
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    l
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    xl
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    2xl
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    m
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    5-8 Years
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    8-12 years
                  </li>
                  <li className="px-2 py-0.5 bg-primary text-white rounded-sm hover:bg-secondary duration-300 cursor-pointer">
                    18+ years
                  </li>
                </div>
              )}
            </div>

            {/* color Section */}
            <div className="border border-primary/20 p-6 rounded-sm mt-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setCollapsed5(!collapsed5)}
              >
                <h2 className="text-base font-medium text-primary">Color</h2>
                {collapsed5 ? <Plus size={18} /> : <Minus size={18} />}
              </div>

              {!collapsed5 && activeCategoryId !== null && (
                <div className="flex flex-wrap gap-2 mt-2 capitalize text-sm list-none">
                  <li className="p-3 rounded-full bg-amber-800 duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-yellow-500 duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-pink-400 duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-red-500 duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-gray-500 duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-green-800 duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-white duration-300 cursor-pointer border border-primary/40"></li>
                  <li className="p-3 rounded-full bg-red-400 duration-300 cursor-pointer border border-primary/40"></li>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShopResponsiveBar;
