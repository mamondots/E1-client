import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo/logo.svg";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import { categoryList } from "@/utilits/categoryList";
import Link from "next/link";

const SideNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side="left" className="px-4 py-4">
        <div className="border-b border-[#262626]/40 pb-4">
          <Image src={logo} alt="logo" width={110} height={110} />
        </div>

        <div>
          {
            <ul className="flex flex-col gap-2">
              {categoryList.map((category) => (
                <li key={category.id} className="capitalize text-sm">
                  <Link href="/">{category.category}</Link>
                </li>
              ))}
            </ul>
          }
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideNav;
