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

export interface ProductItemType {
  url: string;
  images: StaticImageData[];
  producer: string;
  productTitle: string;
  productDetail: string;
  price: number;
  rate: number;
  rateCount: number;
  color: string;
  otherColors: any[];
  comments: any[];
  tags: string[];
  categories: string[];
}
