import React, { useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { TProduct } from "@/types";
import Image from "next/image";
import { Flame, Minus, Plus } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

interface ProductProps {
  product: TProduct;
  onClose: () => void; // New prop to close modal
}

const QuickView: React.FC<ProductProps> = ({ product, onClose }) => {
  const {
    title,
    price,
    mrpPrice,
    thumbelImage,
    description,
    sku,
    availability,
    size,
  } = product;

  const [count, setCount] = useState(1);
  const [isCartLoading, setIsCartLoading] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddToCart = () => {
    if (isCartLoading) return;
    setIsCartLoading(true);
    setTimeout(() => {
      setIsCartLoading(false);
      toast.success("Added to cart!", {
        duration: 2000,
        position: "top-right",
      });
      onClose(); // Close modal after success
    }, 1000); // Simulate API delay
  };

  return (
    <DialogContent className={`p-2 lg:max-w-3xl border-[#262629]/20 rounded`}>
      <div className="flex gap-4">
        <div className="lg:w-1/2">
          <Image
            src={thumbelImage}
            alt={title}
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="lg:w-1/2 mt-2">
          <h1 className="md:text-base text-sm font-medium text-[#262629]/80">
            {title}
          </h1>

          <p className="mt-1 flex items-center gap-1">
            <span className="text-[red]">
              <Flame size={16} fill="currentColor" />
            </span>
            <span className="text-sm text-[red]">6 sold in last 25 hours</span>
          </p>

          <div className="flex items-center gap-3 mt-2">
            <p className="text-lg font-semibold">৳ {price}</p>
            {mrpPrice && (
              <p className="text-[red] line-through text-sm">৳ {mrpPrice}</p>
            )}
          </div>

          <p className="mt-1 text-sm text-[#262629]/80 line-clamp-2">
            {description}
          </p>
          <p className="mt-2 text-sm text-[#262629]/80">
            <span className="font-semibold">SKU</span> : {sku}
          </p>
          <p className="mt-2 text-sm text-[#262629]/80">
            <span className="font-semibold">Availability</span> : {availability}
          </p>

          <div className="mt-2 text-sm text-[#262629]/80">
            <p className="font-semibold">Size :</p>
            <p className="flex items-center gap-1 mt-1">
              {size.map((item, index) => (
                <span
                  key={index}
                  className="border border-[#262629]/40 px-2 rounded text-sm capitalize cursor-pointer hover:border-primary/40 hover:text-primary duration-300"
                >
                  {item}
                </span>
              ))}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-3">
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
            <div
              onClick={handleAddToCart}
              className="w-full bg-primary hover:bg-secondary cursor-pointer duration-300 rounded text-white text-center py-1.5"
            >
              <button className="text-sm outline-none cursor-pointer">
                {isCartLoading ? (
                  <div className="h-4 w-4 border-2 border-white rounded-full animate-spin" />
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </div>

          <Link href="/checkout" className="w-full">
            <div className="bg-primary hover:bg-secondary duration-300 cursor-pointer rounded text-white text-center py-1.5 mt-2">
              <button className="text-sm outline-none cursor-pointer">
                Buy Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </DialogContent>
  );
};

export default QuickView;
