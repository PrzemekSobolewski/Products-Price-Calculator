import { Dispatch, ReactNode, SetStateAction } from "react";

export type Price = {
  year: number;
  price: number;
};

export type Product = {
  id: number;
  name: string;
  requiredProductsIds: number[];
  prices: Price[];
};

export type Promotion = {
  id: number;
  productsIds: number[];
  correlatedProductsIds: number[];
  prices: Price[];
};

export type ProductsData = {
  products: Product[];
  years: number[];
  promotions: Promotion[];
};

export type ProductsCalculatorContextProps = {
  productsData: ProductsData | undefined;
  selectedProducts: Product[];
  setSelectedProducts: Dispatch<SetStateAction<Product[]>>;
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
  sumPrice: number;
  getProductCurrentPrice: (prices: Price[]) => number | undefined;
};

export type IProductsCalculatorContextProvider = {
  children: ReactNode;
};
