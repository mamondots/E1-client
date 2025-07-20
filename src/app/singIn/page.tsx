import SingInForm from "@/utilits/SingInForm";

import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] w-full h-screen Container">
      <div className="bg-white lg:w-1/3  border border-primary/10">
        <h2 className="text-center font-medium text-xl py-4 mt-2 text-primary">
          Welcome to Mistax
        </h2>

        <div className="px-4">
          <p className="text-lg font-medium">Sing In</p>
          <p className="text-sm text-[#474646]">
            Enter your email and password to visited website
          </p>

          <SingInForm />
        </div>
      </div>
    </div>
  );
};

export default page;
