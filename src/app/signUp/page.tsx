import SingUpForm from "@/utilits/SingUpForm";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] w-full h-screen Container">
      <div className="bg-white lg:w-1/3  border border-primary/10">
        <h2 className="text-center font-medium text-xl py-4 mt-2 text-primary">
          Welcome to Oqtos
        </h2>

        <div className="px-4">
          <p className="text-lg font-medium">Sign Up</p>
          <p className="text-sm text-[#474646]">
            Enter the required information to create new account
          </p>

          <SingUpForm />
        </div>
      </div>
    </div>
  );
};

export default page;
