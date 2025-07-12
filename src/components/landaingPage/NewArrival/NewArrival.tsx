"use client";
import React, { useRef } from "react";
import ProductCard from "@/components/product/ProductCard";
import { newProductList } from "@/utilits/newProducts";
import SectionTitle from "@/utilits/SectionTitle";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const NewArrival = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && newProductList.length > 4) ||
    (windowWidth < 1024 && newProductList.length > 3);
  return (
    <section className="Container mt-8 relative">
      <SectionTitle
        title="New Arrival"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel amet incidunt"
      />

      {showCustomArrows && (
        <>
          <div className="absolute top-1/2 xl:left-17 lg:left-8 md:left-8 left-2 z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white xl:p-1 rounded-full border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 xl:right-17 lg:right-8 md:right-8 right-2 z-10 transform -translate-y-1/2">
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
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {newProductList.map((product) => (
          <SwiperSlide key={product.id} className="px-1 mt-6">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrival;
