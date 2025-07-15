import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/logo2.png";
import { menuList } from "@/utilits/menuList";
import Link from "next/link";
import CategoryBar from "../CategoryBar/CategoryBar";
import { Heart, UserRound } from "lucide-react";
import SerachBar from "@/utilits/SerachBar";
import SideCart from "@/utilits/SideCart";
import SideNav from "./SideNav";

const Nav = () => {
  return (
    <>
      <div className="Container py-4 flex items-center justify-between">
        <div className="lg:hidden flex">
          <SideNav />
        </div>
        <div className="">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>

        <div className="lg:block hidden">
          <ul className="lg:flex hidden items-center gap-6 ">
            {menuList.map((menu, index) => (
              <li key={index} className="bg-[]">
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <p>
            <SerachBar />
          </p>
          <Link href="/singIn">
            <p className="lg:block hidden">
              <UserRound size={18} />
            </p>
          </Link>
          <Link href="/wishlist">
            <p>
              <Heart size={18} />
            </p>
          </Link>
          <p>
            <SideCart />
          </p>
        </div>
      </div>
      <div>
        <CategoryBar />
      </div>
    </>
  );
};

export default Nav;
