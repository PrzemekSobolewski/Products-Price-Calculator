import { useContext, useEffect, useState } from "react";
import { ProductsCalculatorContext } from "../../../../context/productsCalculatorContext/productsCalculator-context";
import { Price } from "../../../../context/productsCalculatorContext/productsCalculator-context.types";

type ProductItemProps = {
  name: string;
  prices: Price[];
};

export const ProductItem = ({ name, prices }: ProductItemProps) => {
  const [price, setPrice] = useState<number>(0);
  const { selectedYear, getProductCurrentPrice } = useContext(
    ProductsCalculatorContext,
  );

  useEffect(() => {
    const currentPrice = getProductCurrentPrice(prices);
    setPrice(currentPrice || 0);
  }, [selectedYear]);

  return (
    <li>
      <p>Nazwa usługi: {name}</p>
      <p>cena bez promocji: {price?.toFixed(2)} zł</p>
    </li>
  );
};
