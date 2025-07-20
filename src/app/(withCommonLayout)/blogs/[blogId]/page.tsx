import PageSection from "@/utilits/PageSection";
import Image from "next/image";
import React from "react";
import img from "@/assets/blogs/blog1.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "oqtos | blog",
  description: "Best E-commerce platform for your business",
};

const page = () => {
  return (
    <div>
      <PageSection second="Blogs" third="> The Shirt Makes Your Style" />

      <div className="mt-8 Container xl:px-65 lg:px-45 md:px-30">
        <div className="flex  flex-col">
          <h2 className="lg:text-xl md:text-lg text-base font-medium lg:text-center">
            The Shirt Makes Your Style
          </h2>
          <p className="py-1 text-sm text-[#262626]/70 lg:text-center">
            by{" "}
            <span>
              Al Mamon on <span>July 12 2025</span>
            </span>
          </p>
          <div className="lg:mt-6 mt-3 rounded border border-[#262626]/20 p-2">
            <Image
              src={img}
              alt="blog"
              width={800}
              height={800}
              className="rounded"
            />
          </div>

          <div className="mt-4">
            <h2 className="lg:text-xl md:text-lg text-base font-medium">
              The Shirt Makes Your Style
            </h2>

            <p className="mt-2 text-[#262626]/70 text-sm">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
              conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse.
            </p>

            <p className="mt-4 text-[#262626]/70 text-sm">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse.
            </p>

            <div className="flex items-center gap-2 mt-8 py-4">
              <p className="text-base font-medium text-primary">Tags : </p>
              <ul className="flex items-center gap-1 text-sm">
                <li className="border px-2 py-1 rounded border-primary/20 text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer">
                  Fasion
                </li>
                <li className="border px-2 py-1 rounded border-primary/20 text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer">
                  Woman
                </li>
                <li className="border px-2 py-1 rounded border-primary/20 text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer">
                  Brand
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
