"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { categoresiList } from "@/api/categoryApi";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";

const Categories = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && categoresiList.length > 10) ||
    (windowWidth < 1024 && categoresiList.length > 4);

  return (
    <div className="Container my-4  relative">
      {showCustomArrows && (
        <>
          <div className="absolute sm:top-[40%] top-[45%] xl:left-17 lg:left-8 md:left-8 left-2 z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white xl:p-1 rounded-full border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute sm:top-[40%] top-[45%] xl:right-17 lg:right-8 md:right-8 right-2 z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white xl:p-1 rounded-full border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}

      <Swiper
        slidesPerView={4}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 4 },
          700: { slidesPerView: 6 },
          768: { slidesPerView: 8 },
          1024: { slidesPerView: 9 },
          1280: { slidesPerView: 10 },
          1536: { slidesPerView: 10 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {categoresiList.map((category) => (
          <SwiperSlide key={category.id} className="px-1">
            <Link
              href="/product"
              className="flex flex-col items-center justify-center group"
            >
              <div className="overflow-hidden border border-[#262626]/24 hover:border-primary/40 duration-300 rounded cursor-pointer">
                <Image
                  src={category.image}
                  alt="image"
                  width={120}
                  height={120}
                  className="bg-[#262626]/12 rounded hover:scale-110 duration-300 w-full h-full"
                />
              </div>

              <p className=" md:text-[12px] text-[10px] font-semibold capitalize mt-1 text-[#262626]/60 group-hover:text-primary duration-300">
                {category.title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
