import React from "react";
import image1 from "@/assets/products/flaseDiscount.webp";
import Image from "next/image";

import FlashSaleTimer from "./FlashSaleTimer";
import FlashSaleSlider from "@/slider/FlashSaleSlider";
import SectionTitle from "@/utilits/SectionTitle";
const FlashSale = () => {
  return (
    <div className="Container mt-10">
      <div className="lg:block hidden">
        <SectionTitle
          title="Flash Sale"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel amet incidunt"
        />
      </div>
      <div className="border-b border-[#262626]/20 flex items-center justify-between lg:hidden pb-2">
        <h1 className="text-base font-semibold text-primary">⚡ Flash Sale</h1>

        <FlashSaleTimer />
      </div>
      <div className="flex gap-2">
        <div className="w-1/4 mt-7 hidden lg:block">
          <div className="h-[398px] rounded border border-[#262626]/30 relative">
            <Image
              src={image1}
              alt="image"
              width={500}
              height={500}
              className="w-full h-full rounded"
            />

            <div className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
              <FlashSaleTimer />
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 w-full">
          {/* <div className="grid lg:grid-cols-3 gap-0">
          
            {newProductList.slice(0, 3).map((product) => (
              <div key={product.id} className="px-1">
                <ProductCard product={product} />
              </div>
            ))}
          </div> */}

          <FlashSaleSlider />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
