import { StaticImageData } from "next/image";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  mrpPrice: number;
  description: string;
  size: ("sm" | "md" | "lg" | "xl")[];
  category: string;
  thumbelImage: string | StaticImageData;
  backViewImage: string | StaticImageData;
  images: (string | StaticImageData)[];
  quintity: number;
  sku: string;
  label: string;
  availability: string;
};

export type TBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  label: string;
};
