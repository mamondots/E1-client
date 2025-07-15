import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F5] w-full h-screen Container">
      <div className="bg-white lg:w-1/3  border border-primary/10">
        <h2 className="text-center font-medium text-xl py-4 mt-2 text-primary">
          Welcome to Mistax
        </h2>

        <div className="px-4">
          <p className="text-lg font-medium">Sing Up</p>
          <p className="text-sm text-[#474646]">
            Enter the required information to create new account
          </p>

          <form className="py-4 flex flex-col gap-2">
            <input
              className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
              type="text"
              placeholder="Email"
            />
            <input
              className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
              type="text"
              placeholder="Phone number"
            />
            <input
              className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
              type="text"
              placeholder="Password"
            />

            <input
              className="px-2 py-2 border border-primary/60 text-sm rounded outline-none"
              type="text"
              placeholder="Confirm Password"
            />

            <input
              className="px-2 py-2 bg-primary text-white cursor-pointer hover:bg-secondary duration-300 text-sm rounded outline-none"
              type="submit"
              value="Register"
            />

            <div>
              <p className="text-center text-sm py-4 text-[#474646]">
                If you have already account{" "}
                <Link href="/singIn">
                  <span className="font-medium text-primary cursor-pointer">
                    please Log In
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
