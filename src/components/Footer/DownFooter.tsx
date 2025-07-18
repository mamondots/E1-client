"use client";
import React, { useEffect, useState } from "react";
import { RxHome } from "react-icons/rx";

import Link from "next/link";

import { Phone, ShieldUser, ShoppingCart, Store } from "lucide-react";

const DownFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if the user has reached the bottom of the page
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      if (isBottom) {
        setIsVisible(false); // Hide the footer when at the bottom of the page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // <div className="fixed bottom-0 md:py-12 py-2 w-full bg-[#fff] shadow-2xl z-[999]">
    <div
      className={`fixed  bottom-0 md:py-12 py-4 w-full bg-[#fff] shadow-2xl border-t border-primary/40 z-[999]  transition-transform duration-300 left-0 ${
        isVisible ? "translate-y-0 " : "translate-y-full"
      } md:hidden`}
    >
      <div className="flex items-center justify-between Container">
        <Link href="/">
          <div className="flex flex-col items-center justify-between capitalize text-[#262626]/80 hover:text-primary duration-300">
            <p>
              <RxHome className="text-xl" />
            </p>
            <p className="text-[12px]">Home</p>
          </div>
        </Link>

        <Link href="/product">
          <div className="flex flex-col items-center justify-between capitalize text-[#262626]/80 hover:text-primary duration-300">
            <p>
              <Store className="text-xl" />
            </p>
            <p className="text-[12px]">Shop</p>
          </div>
        </Link>
        <Link href="/contact">
          <div className="flex flex-col items-center justify-between capitalize text-[#262626]/80 hover:text-primary duration-300">
            <p>
              <Phone className="text-xl" />
            </p>
            <p className="text-[12px]">Contact</p>
          </div>
        </Link>

        <Link href="/flat">
          <div className="flex flex-col items-center justify-between capitalize text-[#262626]/80 hover:text-primary duration-300">
            <p>
              <ShieldUser className="text-xl" />
            </p>
            <p className="text-[12px]">Your Account</p>
          </div>
        </Link>

        <Link href="/cart">
          <div className="flex flex-col items-center justify-between capitalize cursor-pointer text-[#262626]/80 hover:text-primary duration-300">
            <p>
              <ShoppingCart className="text-xl" />
            </p>
            <p className="text-[12px]">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DownFooter;
