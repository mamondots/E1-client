import ShopProdicts from "@/components/shop/ShopProdicts";
import ShopSideBar from "@/components/shop/ShopSideBar";
import PageSection from "@/utilits/PageSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PageSection second="Shop" />
      <div className="flex gap-8 Container mt-12">
        <div className="w-1/4 hidden lg:block">
          <ShopSideBar />
        </div>
        <div className="lg:w-3/4 w-full">
          <ShopProdicts />
        </div>
      </div>
    </div>
  );
};

export default page;
