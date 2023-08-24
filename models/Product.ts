export type ProductType = {
    url: string;
    title: string;
    image?: string;
    rate: number;
    rateCount: number;
    price: number;
    tags?: string[];
    discount?: string;
  };