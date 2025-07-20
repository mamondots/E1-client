/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { GitCompare, Heart, Search } from "lucide-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import QuickView from "./QuickView";
import { TProduct } from "@/types";

const optionVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number): any => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

const icons = [
  { icon: GitCompare, label: "Compare" },
  { icon: Heart, label: "Wishlist" },
  { icon: Search, label: "Quick View" },
];

interface ProductProps {
  product: TProduct;
}

const ProductOption: React.FC<ProductProps> = ({ product }) => {
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);

  const handleClick = (label: string) => {
    if (label === "Quick View") {
      setQuickViewOpen(true);
    }
  };

  const handleCloseQuickView = () => {
    setQuickViewOpen(false);
  };

  return (
    <>
      <div className="inline-flex flex-col gap-2 absolute right-4 top-6">
        {icons.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={optionVariants}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => handleClick(item.label)}
                    className="p-1 cursor-pointer border border-[#27272A]/20 hover:border-primary/50 duration-300 text-[#27272A]/60 hover:text-primary rounded inline-flex"
                  >
                    <Icon size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent
                  side="left"
                  className="bg-zinc-800 text-white rounded"
                >
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          );
        })}
      </div>

      {/* Quick View Dialog Control */}
      <Dialog open={isQuickViewOpen} onOpenChange={setQuickViewOpen}>
        <QuickView product={product} onClose={handleCloseQuickView} />
      </Dialog>
    </>
  );
};

export default ProductOption;
