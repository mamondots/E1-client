import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cartImg from "@/assets/image/cart-empty.webp";
const SideCart = () => {
  return (
    <Sheet>
      <SheetTrigger className="mt-2 cursor-pointer">
        <ShoppingCart size={18} />
      </SheetTrigger>
      <SheetContent className="">
        <div className="px-4 pt-4 relative">
          <h2>Your Items</h2>

          <div className="flex items-center justify-center mt-20">
            <Image src={cartImg} alt="Cart Empty" width={200} height={200} />
          </div>
        </div>
        <SheetFooter className="px-0 py-0">
          <div className="flex items-center">
            <Link href="/cart" className="flex-1">
              <div className="bg-[#262626] text-white text-center capitalize py-2 cursor-pointer">
                view cart
              </div>
            </Link>
            <Link href="/checkout" className="flex-1">
              <div className=" bg-primary text-white text-center capitalize py-2 cursor-pointer">
                checkout
              </div>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
