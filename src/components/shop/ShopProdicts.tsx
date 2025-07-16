import { LayoutGrid, Rows3 } from "lucide-react";
import React from "react";
import SortShop from "./SortShop";
import { newProductList } from "@/utilits/newProducts";
import ProductCard from "../product/ProductCard";

const ShopProdicts = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-primary">View All Products</p>
        <div className="flex items-center gap-2">
          <p className="p-2 rounded border border-primary/40 text-primary hover:bg-primary hover:text-white cursor-pointer duration-300">
            <Rows3 size={16} />
          </p>
          <p className="p-2 rounded border border-primary/40 text-primary hover:bg-primary hover:text-white cursor-pointer duration-300">
            <LayoutGrid size={16} />
          </p>
          <div>
            <SortShop />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-2 mt-4">
        {newProductList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopProdicts;
