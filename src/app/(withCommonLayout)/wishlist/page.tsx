import PageSection from "@/utilits/PageSection";
import { wishList } from "@/utilits/wish";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <PageSection second="My WishList" />

      <div className="Container xl:px-55">
        <h2 className="font-medium md:text-2xl text-xl text-center py-8">
          My WishList
        </h2>
        <p className=" capitalize">
          You add <span className="font-semibold text-lg text-primary">3</span>{" "}
          products in your wishlist
        </p>

        <div className="lg:block hidden">
          <div className="flex items-center justify-between mt-4 font-medium text-sm border border-primary/30 bg-primary text-white px-2 py-2 rounded">
            <div className="flex-1">
              <p>Products</p>
            </div>
            <div className="flex flex-1 items-center gap-8 justify-end">
              <p className="w-[100px] text-center">Price</p>
              <p className="w-[80px] text-center">Abability</p>
              <p className="w-[100px] text-center">Date</p>
              <p className="w-[100px] text-center">Action</p>
              <p className="w-[80px] text-center">Remove</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {wishList.map((wish) => (
              <div
                key={wish.id}
                className="flex items-center justify-between border-b border-primary/20 py-2"
              >
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-[60px] h-[60px] border border-primary/20 rounded p-1">
                    <Image
                      src={wish.thumbelImage}
                      alt="wish"
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-sm line-clamp-2 text-primary font-medium hover:underline duration-300 cursor-pointer">
                    {wish.title}
                  </h2>
                </div>

                <div className="flex flex-1 items-center gap-8 justify-end text-sm font-medium">
                  <p className="w-[80px] text-center">৳ {wish.price}</p>
                  <p className="w-[100px] text-center">{wish.status}</p>
                  <p className="w-[100px] text-center">12 June 2025</p>
                  <button className="w-[100px] text-[12px] text-center bg-primary hover:bg-secondary cursor-pointer duration-300 text-white py-2 rounded px-1">
                    Add to cart
                  </button>
                  <div className="w-[80px] flex items-center justify-center">
                    <button className="text-center flex items-center justify-center w-[25px] h-[28px] bg-red-500 hover:bg-red-700 duration-300 rounded text-white cursor-pointer ">
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-2">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            {wishList.map((wish) => (
              <div key={wish.id}>
                <div className="border border-primary/20 rounded p-2">
                  <div>
                    <Image
                      src={wish.thumbelImage}
                      alt="image"
                      width={500}
                      height={500}
                      className="rounded"
                    />
                  </div>
                  <div className="pt-2 flex flex-col gap-1">
                    <h2 className="text-sm line-clamp-2">{wish.title}</h2>
                    <p className="font-medium">৳ {wish.price}</p>
                    <p className="text-sm">
                      Added Date :{" "}
                      <span className="font-medium">12 June 2025</span>
                    </p>
                    <p className="text-sm">
                      Avability :{" "}
                      <span className="font-medium">{wish.status}</span>
                    </p>

                    <div className="flex items-center gap-2">
                      <button className="py-1.5 bg-primary text-white text-sm w-full rounded hover:bg-secondary duration-300 cursor-pointer">
                        Add to cart
                      </button>
                      <button className="px-3 py-2 bg-red-500 hover:bg-red-800 duration-300 cursor-pointer text-white rounded cursor-pointer">
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
