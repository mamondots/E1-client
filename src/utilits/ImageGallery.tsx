"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { Swiper as SwiperClass } from "swiper";

import img1 from "@/assets/products/dress1.webp";

// import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [img1, img1, img1, img1];

// }

const ImageGallery = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  interface ThumbnailClickHandler {
    (index: number): void;
  }

  const handleThumbnailClick: ThumbnailClickHandler = (index) => {
    setSelectedImageIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div>
      <div className="relative flex justify-center">
        {/* Main image preview (Zoomable) */}
        <div className="w-full  max-w-[350px] sm:max-w-[590px] h-full md:h-auto rounded overflow-hidden">
          <Swiper
            modules={[Navigation]}
            // navigation
            onSlideChange={(swiper) =>
              setSelectedImageIndex(swiper.activeIndex)
            }
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            initialSlide={selectedImageIndex}
            className="w-full h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative xl:h-[550px] lg:h-[500px]">
                  <Image
                    src={img}
                    alt={`img ${index}`}
                    width={800}
                    height={800}
                    className="rounded w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="custom-prev cursor-pointer absolute left-8 top-1/2 transform -translate-y-1/2  z-10"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="text-2xl" />
          </button>
          <button
            className="custom-next cursor-pointer absolute right-8 top-1/2 transform -translate-y-1/2 l z-10"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-none mt-2">
        <div className="flex items-center flex-wrap gap-2">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className="cursor-pointer xl:w-[135px] xl:h-[135px] lg:w-[100px] lg:h-[100px] w-[100px] h-[100px] border-2 rounded transition-all duration-200 hover:border-black"
              style={{
                borderColor:
                  selectedImageIndex === index ? "#000" : "transparent",
              }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                width={100}
                height={100}
                className="rounded w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
