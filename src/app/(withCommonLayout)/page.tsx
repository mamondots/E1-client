import Banner from "@/components/landaingPage/Banner/Banner";
import BestSale from "@/components/landaingPage/BestSale/BestSale";
import Blogs from "@/components/landaingPage/Blogs/Blogs";
import Brand from "@/components/landaingPage/Brand/Brand";
import Categories from "@/components/landaingPage/Categories/Categories";
import DiscountProduct from "@/components/landaingPage/DiscountProduct/DiscountProduct";
import FlashSale from "@/components/landaingPage/FlashSale";
import NewArrival from "@/components/landaingPage/NewArrival/NewArrival";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "oqtos | Home",
  description: "Best E-commerce platform for your business",
};

const page = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <NewArrival />
      <FlashSale />
      <BestSale />
      <DiscountProduct />
      <Brand />
      <Blogs />
    </div>
  );
};

export default page;
