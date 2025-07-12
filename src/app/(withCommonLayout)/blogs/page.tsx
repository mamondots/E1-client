import BlogCard from "@/components/landaingPage/Blogs/BlogCard";
import { blogsList } from "@/utilits/blogsList";
import PageSection from "@/utilits/PageSection";
import PaginationList from "@/utilits/Pagination";
import SectionTitle from "@/utilits/SectionTitle";
import React from "react";

const page = () => {
  return (
    <div>
      <PageSection second="Blogs" />
      <div className="Container">
        <div className="mt-8">
          <SectionTitle
            title="Our Blogs"
            subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel amet incidunt"
          />

          <div className="grid lg:grid-cols-3 gap-4">
            {blogsList.map((blog) => (
              <div key={blog.id} className="px-1 mt-6">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          <div className="py-6">
            <PaginationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
