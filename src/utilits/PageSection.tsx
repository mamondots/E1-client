import { poppins } from "@/app/font";
import React from "react";
import image from "@/assets/banner/sectionImage.webp";
interface Props {
  second: string;
  third?: string;
}
const PageSection: React.FC<Props> = ({ second, third }) => {
  return (
    <div
      className={`relative bg-cover bg-center flex items-center justify-center gap-2 md:py-20 py-12 text-white capitalize ${poppins.className}`}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <h1 className="hover:text-primary duration-300 cursor-pointer">home</h1>
        <p>{">"}</p>
        <p className="">{second}</p>
        <p className="">{third}</p>
      </div>
    </div>
  );
};

export default PageSection;
