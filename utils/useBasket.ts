import { ProductItemType } from "@/models/Product";
import { useEffect, useState } from "react";

export default function useBasket() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("basket");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const setBasket = (basket: any) => {
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const addToBasket = (product: any) => {
    if (items.some((item) => item.url === product.url)) {
      const updatedItems = items.map((item) => {
        if (item.url === product.url) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setItems(updatedItems);
    } else {
      setItems([...items, { ...product, count: 1 }]);
    }
  };

  const removeFromBasket = (product: any) => {
    const newBasket = items.filter((item: any) => item.id !== product.id);
    setBasket(newBasket);
  };

  return {
    items,
    setBasket,
    addToBasket,
    removeFromBasket,
  };
}
