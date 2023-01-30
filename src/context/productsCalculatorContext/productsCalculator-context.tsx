import { createContext, useEffect, useState } from "react";
import { mockedProductsData } from "../../utils/mocks";
import {
  ProductsCalculatorContextProps,
  IProductsCalculatorContextProvider,
  ProductsData,
  Product,
  Price,
} from "./productsCalculator-context.types";

export const ProductsCalculatorContext =
  createContext<ProductsCalculatorContextProps>({
    productsData: undefined,
    selectedProducts: [],
    setSelectedProducts: () => undefined,
    selectedYear: 2023,
    setSelectedYear: () => undefined,
    sumPrice: 0,
  });

export const ProductsCalculatorContextProvider = ({
  children,
}: IProductsCalculatorContextProvider) => {
  const [productsData, setProductsData] =
    useState<ProductsData>(mockedProductsData);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [sumPrice, setSumPrice] = useState<number>(0);

  const getCurrentPrice = (prices: Price[], year: number) => {
    return prices.find((price) => price.year === selectedYear)?.price;
  };

  const calculateSumPrice = () => {
    const activePromotions = productsData.promotions.filter((promotion) =>
      promotion.correlatedProductsIds.every((productId) =>
        selectedProducts.find(
          (selectedProduct) => productId === selectedProduct.id,
        ),
      ),
    );

    const productsPrices = selectedProducts.map((product) => {
      const { id, prices } = product;

      const currentPrice = getCurrentPrice(prices, selectedYear);

      const isPromoProduct = activePromotions.some(
        (promotion) => promotion.productsIds.indexOf(id) !== -1,
      );

      if (isPromoProduct) {
        return { price: 0 };
      }

      return { price: currentPrice };
    });

    const promotionPrices = activePromotions.map((promotion) => {
      const { prices } = promotion;
      const currentPrice = getCurrentPrice(prices, selectedYear);

      return { price: currentPrice };
    });

    const sumPrices = [...productsPrices, ...promotionPrices];

    const totalPrice = sumPrices.reduce((acc, currValue) => {
      if (currValue.price) {
        return acc + currValue.price;
      }
      return acc;
    }, 0);

    return totalPrice;
  };

  useEffect(() => {
    setSumPrice(calculateSumPrice());
  }, [selectedProducts, selectedYear]);

  const servicesCalculatorContextProviderValue = {
    productsData,
    selectedProducts,
    setSelectedProducts,
    selectedYear,
    setSelectedYear,
    sumPrice,
  };

  return (
    <ProductsCalculatorContext.Provider
      value={servicesCalculatorContextProviderValue}
    >
      {children}
    </ProductsCalculatorContext.Provider>
  );
};
