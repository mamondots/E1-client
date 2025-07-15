import CheckoutInfo from "@/components/Checkout/CheckoutInfo/CheckoutInfo";
import CheckoutProducts from "@/components/Checkout/CheckoutProducts/CheckoutProducts";
import PageSection from "@/utilits/PageSection";
import React from "react";

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
