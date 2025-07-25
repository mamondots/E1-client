import { cartList } from "@/utilits/cart";
import PageSection from "@/utilits/PageSection";
import { Trash } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

export const metadata: Metadata = {
  title: "oqtos | cart",
  description: "Best E-commerce platform for your business",
};

const page = () => {
  return (
    <div>
      <PageSection second="My Cart" />
      <div className="Container w-full mx-auto xl:px-40 lg:px-15 md:px-20 lg:mt-0 mt-4">
        <div className="hidden lg:block">
          <h2 className="font-medium md:text-2xl text-xl text-center py-8">
            Your Cart
          </h2>

          <div className="grid grid-cols-7 font-medium border-t border-primary/20 py-5">
            <div className="col-span-2">Product</div>
            <div>Unit Price</div>
            <div>Size</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div>Action</div>
          </div>

          <div>
            {cartList.map((cart) => (
              <div
                key={cart.id}
                className="grid grid-cols-7 items-center border-t border-primary/20 py-3"
              >
                <div className="col-span-2 flex  xl:flex-row items-start  gap-3">
                  <div className="w-[60px] h-[40px]">
                    <Image
                      src={cart.thumbelImage}
                      alt=""
                      width={120}
                      height={120}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-sm text-primary line-clamp-2">
                    {cart.title}
                  </p>
                </div>

                <div className="flex gap-2">
                  <p className="lg:ml-3">৳ {cart.price}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-lg">{cart.size}</p>
                </div>

                <div className="flex items-center justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2 py-1 md:w-[60%] w-[30%]">
                  <p
                    // onClick={() => handleDecrement(cart._id)}
                    className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                  >
                    <BiMinus size={16} />
                  </p>
                  <span>2</span>
                  <p
                    // onClick={() => handleIncrement(cart._id)}
                    className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                  >
                    <BiPlus size={16} />
                  </p>
                </div>

                {/* Subtotal */}
                <div>
                  {/* <p>৳ {cart.productRef.price * (quantities[cart._id] || 1)}</p> */}
                  <p>৳ {cart.price}</p>
                </div>

                {/* Action */}
                <button
                  //   onClick={() => handleDelete(cart._id)}
                  className="text-white cursor-pointer ml-2 rounded"
                >
                  {/* <RiDeleteBin6Line className="bg-[#C9302C] h-7 w-7 p-1" /> */}
                  <Trash
                    size={16}
                    className="bg-[#C9302C] h-7 w-7 p-1 rounded"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden block">
          <h2 className="font-medium md:text-3xl text-xl text-center py-8">
            Your Cart
          </h2>

          {cartList?.map((cart) => (
            <div
              key={cart.id}
              className="flex flex-col mb-5 bg-primary/20 hover:bg-[#E6E6E6] transition-colors duration-200 rounded"
            >
              <div className="bg-primary flex justify-between border-t border-black/5 py-3 px-3 rounded-t">
                <div className="">
                  <p className="text-white font-medium text-[15px] hover:underline hover:text-[#fff] cursor-pointer px-1">
                    {cart.title}
                  </p>
                </div>

                <div className="w-[60px] h-[60px]">
                  <Image
                    src={cart.thumbelImage}
                    alt=""
                    width={120}
                    height={120}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="hover:bg-[#E6E6E6] rounded-b">
                <div className="flex justify-between border-t border-black/5 py-3 px-3">
                  <p className="font-medium text-[15px]">Price</p>
                  <div className="flex gap-2">
                    <p>৳ {cart.price}</p>
                  </div>
                </div>

                <div className="flex justify-between border-t border-black/5 py-3 px-3">
                  <p className="font-medium text-[15px]">Quantity</p>
                  <div className="flex items-center justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2 py-1 md:w-[45%] w-[30%]">
                    <p
                      //   onClick={() => handleDecrement(cart._id)}
                      className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                    >
                      <BiMinus size={16} />
                    </p>
                    {/* <span>{quantities[cart._id]}</span> */}
                    <span>{cart.quintity}</span>
                    <p
                      //   onClick={() => handleIncrement(cart._id)}
                      className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                    >
                      <BiPlus size={16} />
                    </p>
                  </div>
                </div>

                <div className="flex justify-between border-t border-black/5 py-3 px-3">
                  <p className="font-medium text-[15px]">Subtotal</p>
                  <div className="flex gap-2">
                    <p>
                      {/* ৳ {cart.productRef.price * (quantities[cart._id] || 1)} */}
                      ৳ 6502
                    </p>
                  </div>
                </div>

                <button
                  //   onClick={() => handleDelete(cart._id)}
                  className="text-white cursor-pointer"
                >
                  <Trash className="bg-[#C9302C]  h-7 w-7 p-1 rounded" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 justify-between items-center my-12">
          <div className="text-xl font-medium flex items-center gap-2">
            <span> Total Amount (৳):</span>
            <span className="text-2xl  text-primary">12054</span>
          </div>

          <Link href="/checkout" className="w-[70%] sm:w-[50%] md:w-[40%]">
            <div className="text-white text-sm font-medium items-center text-center  bg-primary rounded hover:bg-secondary cursor-pointer duration-300 px-2 py-2">
              <span>Proces To Checkout</span>
            </div>
          </Link>

          <Link
            href="/product"
            className="text-white text-sm font-semimedium rounded items-center text-center w-[70%] sm:w-[50%] md:w-[40%] bg-primary hover:bg-secondary px-2 py-2 mt-3 duration-300"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
