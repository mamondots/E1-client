import { Mail, Phone, UserRound } from "lucide-react";
import React from "react";
import cash from "@/assets/paymentmethod/cash.png";
import bkash from "@/assets/paymentmethod/bkash.jpg";
import card from "@/assets/paymentmethod/card.png";
import Image from "next/image";

const CheckoutInfo = () => {
  return (
    <div className="">
      <h2 className="text-center text-xl font-medium">Checkout Info</h2>

      <div className="border border-primary/20 rounded p-4 mt-4">
        <h2 className="font-medium text-sm text-primary">
          Personal Information
        </h2>

        <form className="mt-3 flex flex-col gap-2">
          <div className="flex items-center gap-2 border border-primary/20 rounded">
            <p className="bg-primary text-white px-3 py-2.5 rounded">
              <UserRound size={16} />
            </p>
            <input
              className="outline-none text-sm w-full"
              type="text"
              placeholder="Name..."
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-primary/20 rounded w-full">
              <p className="bg-primary text-white px-3 py-2.5 rounded">
                <Phone size={16} />
              </p>
              <input
                className="outline-none text-sm w-full"
                type="text"
                placeholder="Name..."
              />
            </div>

            <div className="flex items-center gap-2 border border-primary/20 rounded w-full">
              <p className="bg-primary text-white px-3 py-2.5 rounded">
                <Mail size={16} />
              </p>
              <input
                className="outline-none text-sm w-full"
                type="text"
                placeholder="Email (If you have)"
              />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-medium text-sm text-primary">
              Shipping Information
            </h2>

            <div className="flex gap-2 mt-2">
              <input
                className="px-2 py-2 rounded border border-primary/20 text-sm w-full outline-none"
                type="text"
                placeholder="House No..."
              />
              <input
                className="px-2 py-2 rounded border border-primary/20 text-sm w-full outline-none"
                type="text"
                placeholder="Road/Area..."
              />
            </div>

            <div className="mt-2">
              <input
                className="px-2 py-2 rounded border border-primary/20 text-sm w-full outline-none"
                type="text"
                placeholder="Details Address.."
              />
            </div>

            <div className="mt-2 flex items-center gap-2">
              <select className="px-2 py-2 rounded border border-primary/20 text-sm w-full outline-none">
                <option value="">Select City</option>
                <option value="">Dhaka</option>
                <option value="">Comilla</option>
              </select>

              <input
                className="px-2 py-2 rounded border border-primary/20 text-sm w-full outline-none"
                type="text"
                placeholder="Alt. Number..."
              />
            </div>

            <div className="mt-2">
              <textarea
                className="px-2 py-2 rounded border border-primary/20 text-sm w-full outline-none"
                placeholder="Special Note(Optional)..."
                cols={30}
                rows={6}
              ></textarea>
            </div>
          </div>

          <div>
            <h2 className="font-medium text-sm text-primary">Payment Method</h2>

            <div className="flex items-center gap-2 mt-2">
              <div className="w-[120px] h-[60px] cursor-pointer">
                <Image
                  src={cash}
                  alt="cash"
                  width={100}
                  height={100}
                  className="border border-primary/40 hover:border-primary duration-300 p-4 rounded w-full h-full"
                />
              </div>

              <div className="w-[120px] h-[60px] cursor-pointer">
                <Image
                  src={bkash}
                  alt="cash"
                  width={100}
                  height={100}
                  className="border border-primary/40 hover:border-primary duration-300 p-4 rounded w-full h-full"
                />
              </div>

              <div className="w-[120px] h-[60px] cursor-pointer">
                <Image
                  src={card}
                  alt="cash"
                  width={100}
                  height={100}
                  className="border border-primary/40 hover:border-primary duration-300 p-4 rounded w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-2">
            <h2 className="font-medium text-sm text-primary">
              Got any Coupon Code?
            </h2>

            <div className="mt-2 flex items-end gap-2 w-full">
              <input
                className="px-2 py-2 rounded border border-primary/20 text-sm w-3/4 outline-none"
                type="text"
                placeholder="Enter coupon here..."
              />
              <button className="xl:text-sm sm:text-[12px] text-[10px] xl:px-4 px-2 xl:py-2 sm:py-2.5 py-3 rounded hover:bg-secondary duration-300 cursor-pointer font-medium bg-primary text-white">
                Add Coupon
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <p className="md:text-sm text-[12px]">
              I agree to{" "}
              <span className="text-primary hover:underline duration-300 cursor-pointer">
                Terms & Conditions
              </span>
              , and{" "}
              <span className="text-primary hover:underline duration-300 cursor-pointer">
                Privacy Policy
              </span>{" "}
              of mixtax.
            </p>
          </div>

          <div className="py-4">
            <input
              className="px-2 py-2 font-medium hover:bg-secondary duration-300 cursor-pointer rounded bg-primary text-sm w-full text-white outline-none"
              type="submit"
              value="Confirm Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutInfo;
