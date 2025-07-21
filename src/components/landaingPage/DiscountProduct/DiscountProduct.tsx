import React from "react";
import image1 from "@/assets/products/flaseDiscount.webp";
import Image from "next/image";

import SectionTitle from "@/utilits/SectionTitle";
import DiscountProductSlider from "@/slider/DiscountProductSlider";
const DiscountProduct = () => {
  return (
    <div className="Container mt-10">
      <SectionTitle
        title="Discount Products"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel amet incidunt"
      />

      <div className="flex gap-2">
        <div className="lg:w-3/4 w-full">
          <DiscountProductSlider />
        </div>
        <div className="w-1/4 mt-7 hidden lg:block">
          <div className="h-[398px] rounded border border-[#262626]/30 relative">
            <Image
              src={image1}
              alt="image"
              width={500}
              height={500}
              className="w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
