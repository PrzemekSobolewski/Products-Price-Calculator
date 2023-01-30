import { ProductsCalculatorContextProvider } from "../../../context/productsCalculatorContext/productsCalculator-context";
import { ProductsCalculator } from "./ProductsCalculator";
import { productsCalculatorStyles } from "./ProductsCalculator.styles";

export const ProductsCalculatorView = () => {
  return (
    <ProductsCalculatorContextProvider>
      <header>
        <h1 css={productsCalculatorStyles.title}>
          Kalkulator cen usług telekomunikacyjnych
        </h1>
      </header>
      <ProductsCalculator />
    </ProductsCalculatorContextProvider>
  );
};
