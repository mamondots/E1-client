import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="mt-1 cursor-pointer">
        <Search size={18} />
      </SheetTrigger>
      <SheetContent side="top" className="lg:px-60">
        <SheetHeader>
          <div className="px-4">
            <h1 className="text-sm font-semibold text-[#262626]/60">
              Search products by title,category or brand...
            </h1>
          </div>
          <div className="flex w-full">
            <div className="px-4 py-2 w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <p className="bg-primary hover:bg-secondary duration-300  rounded h-[40px] mt-2 px-4 flex items-center justify-center text-white cursor-pointer">
              search
            </p>
          </div>
        </SheetHeader>

        {/* <SheetClose>
            <button className="ml-2 border px-4 py-2 rounded">Cancel</button>
          </SheetClose> */}
      </SheetContent>
    </Sheet>
  );
};

export default SearchBar;
