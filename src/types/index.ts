import { StaticImageData } from "next/image";

export type TProduct = {
  id: number;
  title: string;
  price: number | string;
  mrpPrice: number | string;
  description: string;
  size: string[];
  category: string;
  thumbelImage: string | StaticImageData; // Assuming these are URLs or imports of image paths
  backViewImage: string | StaticImageData;
  images: string[] | StaticImageData[]; // Array of image paths or imports
  quintity: number; // Note: likely meant to be "quantity"
  sku: string;
  label?: string;
  availability: string; // Optional enum
};

export type TBlog = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  author: string;
  date: string;
  label: string;
};
