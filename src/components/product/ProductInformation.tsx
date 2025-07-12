import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ProductInformation = () => {
  return (
    <div className="mt-8">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="">
          <TabsTrigger className=" shadow-none " value="details">
            Product Details
          </TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent
          className="rounded border border-[#262626]/40 p-4 mt-2"
          value="details"
        >
          <h1 className="text-base font-medium text-primary">Description</h1>
          <p className="mt-2 text-[#262626]/80">
            Product are cut from ripstop that boasts a comfortable, stretchy
            quality and detailed with an oversized take on utility pockets.
          </p>

          <div className="mt-2">
            <h1 className="text-base font-medium text-primary">
              Features Product:
            </h1>
            <ul className="mt-2 text-[#262626]/80 flex flex-col gap-1">
              <li className="">Tonal stitching: 97% cotton, 3% elastane.</li>
              <li>Supple and stretch knit with a rich touch of wool.</li>
              <li>Model: Model is 6 1, wearing a size S.</li>
              <li>Caring for your clothes is caring for the environment.</li>
              <li>Machine wash in cold water at 30°C / 85 °F.</li>
              <li>Do not bleach</li>
              <li>Do not tumble dry</li>
              <li>Do not dry clean.Iron at low temperature.</li>
              <li></li>
            </ul>
            <p className="mt-2 text-[#262626]/80">
              Product feature front slash pockets, oversized zipped
              utility-pockets and two zipped back pockets. This design is cut
              from lightweight, breathable nylon-ripstop blended with stretch
              for optimal comfort.
            </p>
          </div>
        </TabsContent>
        <TabsContent
          className="rounded border border-[#262626]/40 p-4 mt-2"
          value="reviews"
        >
          <h2 className="text-base font-medium text-primary">Give a Review</h2>
          <p className="mt-2 text-[#262626]/80">
            How we use your data: We’ll only contact you about the review you
            left, and only if necessary. By submitting your review, you agree to
            Judge.me’s terms, privacy and content policies.
          </p>

          <h1 className="text-base font-medium text-primary mt-2">
            Write a review
          </h1>

          <div className="mt-4 md:w-1/2">
            <form className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <input
                  className="border outline-none px-2 py-2 rounded text-sm"
                  type="text"
                  placeholder="Give your review a title"
                />
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  className="border outline-none px-2 py-2 rounded text-sm"
                  cols={30}
                  rows={6}
                  placeholder="Write your review here.."
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="border outline-none px-2 py-2 rounded text-sm"
                  type="text"
                  placeholder="Give your rating 1 to 5.."
                />
              </div>

              <div className="flex">
                <input
                  className="px-6 py-2 bg-primary hover:bg-secondary duration-300 cursor-pointer text-white rounded"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductInformation;
