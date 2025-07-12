"use client";
import React, { useRef } from "react";
import { newProductList } from "@/utilits/newProducts";
import SectionTitle from "@/utilits/SectionTitle";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { brandList } from "@/utilits/brandList";
import Image from "next/image";
const Brand = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && newProductList.length > 7) ||
    (windowWidth < 1024 && newProductList.length > 3);
  return (
    <section className="Container mt-10 relative">
      <SectionTitle
        title="Shop By Brands"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel amet incidunt"
      />

      {showCustomArrows && (
        <>
          <div className="absolute top-4/6 xl:left-17 lg:left-8 md:left-8 left-2 z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white xl:p-1 rounded-full border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-4/6 xl:right-17 lg:right-8 md:right-8 right-2 z-10 transform -translate-y-1/2">
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
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 7 },
          1280: { slidesPerView: 7 },
          1536: { slidesPerView: 7 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {brandList.map((brand) => (
          <SwiperSlide key={brand.id} className="px-1 mt-6">
            <div className="border border-[#262626]/40 hover:border-primary/40 duration-300 cursor-pointer rounded p-6 h-[100px]">
              <Image
                src={brand.brandImage}
                alt="brand"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brand;
