import { StaticImageData } from "next/image";

export type ProductType = {
  url: string;
  title: string;
  image?: string | StaticImageData;
  rate: number;
  rateCount: number;
  price: number;
  tags?: string[];
  discount?: string;
  category: string;
  brand?: string;
};
