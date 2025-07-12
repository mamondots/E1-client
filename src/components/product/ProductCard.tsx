"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TProduct } from "@/types";
import ProductOption from "./ProductOption";
import { poppins } from "@/app/font";
import Link from "next/link";

interface productPros {
  product: TProduct;
}

const ProductCard: React.FC<productPros> = ({ product }) => {
  const { title, price, mrpPrice, thumbelImage, backViewImage, label, id } =
    product;

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border border-[#262626]/20 rounded  group-hover:border-primary/20 cursor-pointer relative ${poppins.className}`}
      >
        <div className="w-full relative">
          <Link href={`/product/${id}`}>
            <div className="group lg:h-[280px] relative overflow-hidden">
              <Image
                src={thumbelImage}
                alt={title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <Image
                  src={backViewImage}
                  alt={title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
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

        <div className="p-2">
          <h1 className="text-sm font-medium text-[#262626]/70 line-clamp-1">
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">৳ {price}</p>
            {mrpPrice && (
              <p className="text-[red] line-through text-sm mt-1">
                ৳ {mrpPrice}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 py-2">
            <motion.button
              className="bg-primary group-hover:bg-secondary duration-300 cursor-pointer w-full py-1.5 rounded text-white capitalize text-base font-medium"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isHovered ? "click" : "add"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="capitalize block text-sm"
                >
                  {isHovered ? "click to buy" : "Buy Now"}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <Tooltip>
              <TooltipTrigger>
                <p className="px-3 py-2 bg-zinc-800 text-white rounded cursor-pointer">
                  <ShoppingCart size={16} />
                </p>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-800 text-white rounded">
                <p>Add to cart</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && <ProductOption key="options" product={product} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductCard;
