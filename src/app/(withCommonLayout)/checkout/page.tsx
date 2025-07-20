import CheckoutInfo from "@/components/Checkout/CheckoutInfo/CheckoutInfo";
import CheckoutProducts from "@/components/Checkout/CheckoutProducts/CheckoutProducts";
import PageSection from "@/utilits/PageSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "oqtos | checkout",
  description: "Best E-commerce platform for your business",
};

const page = () => {
  return (
    <div>
      <PageSection second="Checkout" />

      <div className="Container grid lg:grid-cols-2 gap-12 mt-12">
        <div>
          <CheckoutInfo />
        </div>
        <div className="">
          <CheckoutProducts />
        </div>
      </div>
    </div>
  );
};

export default page;
