"use client";
import React from "react";

import SectionTitle from "@/utilits/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { blogsList } from "@/utilits/blogsList";
import BlogCard from "./BlogCard";
const Blogs = () => {
  return (
    <section className="Container mt-8 relative">
      <SectionTitle
        title="Our Blogs"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel amet incidunt"
      />

      <Swiper
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
        modules={[Pagination]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ el: ".custom-pagination", clickable: true }}
        speed={1000}
      >
        {blogsList.map((blog) => (
          <SwiperSlide key={blog.id} className="px-1 mt-6">
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex justify-center gap-2"></div>
    </section>
  );
};

export default Blogs;
