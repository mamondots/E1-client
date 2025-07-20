import ShopProdicts from "@/components/shop/ShopProdicts";
import ShopSideBar from "@/components/shop/ShopSideBar";
import PageSection from "@/utilits/PageSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "oqtos | products",
  description: "Best E-commerce platform for your business",
};

const page = () => {
  return (
    <div>
      <PageSection second="Shop" />
      <div className="flex xl:gap-8 gap-4 Container md:mt-12 mt-6">
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
