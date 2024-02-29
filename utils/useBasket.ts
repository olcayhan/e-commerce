const useBasket = () => {
  
  const getBasket = () => {
    const basket = localStorage.getItem("basket");
    return basket ? JSON.parse(basket) : [];
  };

  const setBasket = (basket: any) => {
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const addToBasket = (product: any) => {
    const basket = getBasket();
    if (basket.find((item: any) => item.productTitle === product.productTitle))
      basket.forEach((item: any) => {
        if (item.productTitle === product.productTitle) item.count++;
      });
    else basket.push({ ...product, count: 1 });

    setBasket(basket);
  };

  const removeFromBasket = (product: any) => {
    const basket = getBasket();
    const newBasket = basket.filter((item: any) => item.id !== product.id);
    setBasket(newBasket);
  };

  return {
    getBasket,
    setBasket,
    addToBasket,
    removeFromBasket,
  };
};

export default useBasket;
