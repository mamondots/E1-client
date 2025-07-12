"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { newProductList } from "@/utilits/newProducts";
import ProductCard from "@/components/product/ProductCard";

const DiscountProductSlider = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && newProductList.length > 3) ||
    (windowWidth < 1024 && newProductList.length > 2);
  return (
    <div className="relative">
      {showCustomArrows && (
        <div className="lg:hidden block">
          <div className="absolute lg:top-5 top-1/2 lg:right-8 lg:left-auto  left-[-10px]   z-10 transform -translate-y-1/2 pb-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white hover:bg-primary duration-300 hover:text-white xl:p-1 lg:p-1 p-2 lg:rounded rounded-full  border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
          </div>
          <div className="absolute lg:top-5 top-1/2 lg:right-0 right-[-10px]  z-10 transform -translate-y-1/2 pb-2">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white hover:bg-primary duration-300 hover:text-white xl:p-1 lg:p-1 p-2 lg:rounded rounded-full border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      <Swiper
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 3 },
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          {newProductList.map((product) => (
            <SwiperSlide key={product.id} className="px-1 lg:mt-8 mt-2">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default DiscountProductSlider;
