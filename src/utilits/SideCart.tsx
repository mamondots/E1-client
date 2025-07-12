import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

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
            <h2 className="text-lg font-semibold text-[#262626]/50">
              Have no items
            </h2>
          </div>

          {/* <div className="flex absolute bottom-0">
            <div>view cart</div>
            <div>checkout</div>
          </div> */}
        </div>
        <SheetFooter className="px-0 py-0">
          <div className="flex items-center">
            <div className="flex-1 bg-[#262626] text-white text-center capitalize py-2 cursor-pointer">
              view cart
            </div>
            <div className="flex-1 bg-primary text-white text-center capitalize py-2 cursor-pointer">
              checkout
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
