import React from "react";

import payment from "@/assets/image/payment.jpg";
import Image from "next/image";
import {
  Facebook,
  Flame,
  Instagram,
  LockKeyhole,
  ShieldCheck,
  Truck,
  Twitter,
} from "lucide-react";
import AddBtn from "@/utilits/AddBtn";
import ShippingInfo from "@/utilits/ShippingInfo";
import ImageGallery from "@/utilits/ImageGallery";
import ProductInformation from "@/components/product/ProductInformation";
import ReletiveProducts from "@/components/product/ReletiveProducts";

const page = () => {
  return (
    <div className="Container py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="">
          <ImageGallery />
        </div>
        <div className="">
          <h1 className="lg:text-2xl md:text-lg text-sm font-medium text-[#262629]/90">
            Pink Printed and Embroidered Cotton Saree
          </h1>

          <p className="mt-1 flex items-center gap-1">
            <span className="text-[red]">
              <Flame size={16} fill="currentColor" />
            </span>
            <span className="text-sm text-[red]">6 sold in last 25 hours</span>
          </p>

          {/* <div className="flex items-center gap-3 mt-2">
            <p className="text-lg font-semibold">৳ {price}</p>
            {mrpPrice && (
              <p className="text-[red] line-through text-sm">৳ {mrpPrice}</p>
            )}
          </div> */}

          <div className="flex items-center gap-3 mt-3">
            <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold">
              ৳ 1258
            </p>

            <p className="text-[red] line-through lg:text-lg text-sm">৳ 1358</p>
          </div>

          <p className="mt-4 text-sm text-[#262629]/80 line-clamp-3">
            Crimson red dobby texture printed viscose-cotton kameez with golden,
            copper, olive, orange, pink, yellow, pastel green and mint
            embroidery. Comes with crimson red cotton shalwar and matching
            printed vortex-cotton dupatta with tassels.
          </p>

          <p className="mt-2 text-sm text-[#262629]/80">
            <span className="font-semibold">sku</span> : AB-1588
          </p>
          <p className="mt-2 text-sm text-[#262629]/80">
            <span className="font-semibold">Availability</span> : In Stock
          </p>

          <div className="mt-4 flex items-center gap-3 text-sm text-[#262629]/80">
            <p className="font-semibold">Size :</p>
            <p className="flex items-center gap-1">
              <span className="border border-[#262629]/40 px-2 rounded text-sm capitalize cursor-pointer hover:bg-primary hover:text-white duration-300">
                s
              </span>
              <span className="border border-[#262629]/40 px-2 rounded text-sm capitalize cursor-pointer hover:bg-primary hover:text-white duration-300">
                m
              </span>
              <span className="border border-[#262629]/40 px-2 rounded text-sm capitalize cursor-pointer hover:bg-primary hover:text-white duration-300">
                l
              </span>
              <span className="border border-[#262629]/40 px-2 rounded text-sm capitalize cursor-pointer hover:bg-primary hover:text-white duration-300">
                xl
              </span>
            </p>
          </div>

          <div>
            <AddBtn />
          </div>
          <div className="w-full bg-primary hover:bg-secondary duration-300 cursor-pointer rounded text-white text-center py-1.5 mt-2">
            <button className="text-sm outline-none cursor-pointer">
              Buy Now
            </button>
          </div>

          <div>
            <ShippingInfo />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="flex items-center gap-2 text-[#262629]/70">
              <span>
                <LockKeyhole size={16} />
              </span>{" "}
              <span>Secure payment</span>
            </p>
            <p className="flex items-center gap-2 text-[#262629]/70">
              <span>
                <ShieldCheck size={16} />
              </span>{" "}
              <span>2 Year Warranty</span>
            </p>
            <p className="flex items-center gap-2 text-[#262629]/70">
              <span>
                <Truck size={16} />
              </span>{" "}
              <span>Spend $1,000.00 for Free Shipping</span>
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-[#262629]/60">
              Share with :{" "}
            </p>

            <div className="flex gap-2 mt-2">
              <p className="flex items-center gap-2 text-[#262629]/70">
                <span className="bg-[#0866FF] p-1 rounded">
                  <Facebook size={16} fill="white" className="text-white" />
                </span>{" "}
              </p>
              <p className="flex items-center gap-2 text-[#262629]/70">
                <span className="bg-[#D64752] p-1 rounded">
                  <Instagram size={16} className="text-white" />
                </span>{" "}
              </p>
              <p className="flex items-center gap-2 text-[#262629]/70">
                <span className="bg-[#1C96E8] p-1 rounded text-white">
                  <Twitter size={16} />
                </span>{" "}
              </p>
            </div>

            <div className="flex items-center flex-col justify-center border border-[#262629]/20 rounded mt-4">
              <h1 className="py-2 px-4 text-base font-medium mt-[-20px] bg-white">
                Guarantee safe checkout
              </h1>
              <Image
                src={payment}
                alt="payment"
                width={350}
                height={350}
                className="pb-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductInformation />
      </div>

      <div>
        <ReletiveProducts />
      </div>
    </div>
  );
};

export default page;
