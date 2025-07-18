"use client";
import { TProduct } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
interface productPros {
  product: TProduct;
}

import Link from "next/link";
import { poppins } from "@/app/font";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
const RowProductCard: React.FC<productPros> = ({ product }) => {
  const {
    title,
    price,
    mrpPrice,
    thumbelImage,
    backViewImage,
    label,
    id,
    description,
  } = product;

  const [isCartLoading, setIsCartLoading] = useState(false);

  const handleAddToCart = () => {
    if (isCartLoading) return;
    setIsCartLoading(true);
    setTimeout(() => {
      setIsCartLoading(false);
      toast.success("Added to cart!", {
        duration: 4000,
        position: "top-right",
      });
    }, 1000); // Simulate API delay
  };
  return (
    <div>
      <div
        className={`rounded flex gap-4  group cursor-pointer relative ${poppins.className}`}
      >
        <div className="relative">
          <Link href={`/product/${id}`}>
            <div className="group w-[300px] relative overflow-hidden">
              <Image
                src={thumbelImage}
                alt={title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500">
                <Image
                  src={backViewImage}
                  alt={title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>

          <div className="top-3 left-3 absolute">
            {label && (
              <p className="px-2 py-1 bg-primary group-hover:bg-secondary duration-300 rounded text-white inline-flex text-[12px]">
                {label}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Link href={`/product/${id}`}>
            <h2 className="text-lg font-medium group-hover:text-primary duration-300 cursor-pointer">
              {title}
            </h2>
          </Link>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-xl font-semibold">৳ {price}</p>
            {mrpPrice && (
              <p className="text-[red] line-through text-sm">৳ {mrpPrice}</p>
            )}
          </div>
          <Link href={`/product/${id}`}>
            <p className="mt-1 line-clamp-3 text-sm text-[#262626]/70">
              {description}
            </p>
          </Link>

          <div className="inline-flex items-center gap-2 mt-4">
            <Link href="/checkout">
              <button className="bg-primary hover:bg-secondary duration-300 cursor-pointer w-full py-1.5 px-6 rounded text-white capitalize text-sm font-medium">
                click to buy
              </button>
            </Link>

            <Tooltip>
              <TooltipTrigger onClick={handleAddToCart}>
                <div className="px-3 py-2 bg-zinc-800 text-white rounded cursor-pointer">
                  {isCartLoading ? (
                    <div className="h-4 w-4 border-2 border-white  rounded-full animate-spin" />
                  ) : (
                    <ShoppingCart size={18} />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-800 text-white rounded">
                <p>Add to cart</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowProductCard;
