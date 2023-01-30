import { useContext, useState, useEffect } from "react";
import { ProductsCalculatorContext } from "../../../context/productsCalculatorContext/productsCalculator-context";
import { productsCalculatorStyles } from "./ProductsCalculator.styles";
import {
  createOptionsFromProductsData,
  createOptionsFromYears,
  filterSelectedProducts,
  filterSelectedProductsOptions,
} from "./helpers";
import { ProductItem } from "./components/ProductItem";
import Select, { SingleValue, MultiValue } from "react-select";

export const ProductsCalculator = () => {
  const [yearSelectOptions, setYearSelectOptions] = useState<SelectOption[]>(
    [],
  );
  const [productSelectOptions, setProductSelectOptions] = useState<
    SelectOption[]
  >([]);
  const [selectedProductsOptions, setSelectedProductsOptions] = useState<
    SelectOption[]
  >([]);
  const [filteredSelectedProductsOptions, setFilteredSelectedProductsOptions] =
    useState<SelectOption[]>([]);

  const {
    productsData,
    selectedYear,
    setSelectedYear,
    selectedProducts,
    setSelectedProducts,
    sumPrice,
  } = useContext(ProductsCalculatorContext);

  const handleSelectedYearChange = (newValue: SingleValue<SelectOption>) => {
    if (!newValue) {
      return;
    }
    setSelectedYear(Number(newValue.value));
  };

  const handleSelectedProductsOptionsChange = (
    newValue: MultiValue<SelectOption>,
  ) => {
    setSelectedProductsOptions([...newValue]);
  };

  useEffect(() => {
    if (!productsData) {
      return;
    }

    const yearOptions = createOptionsFromYears(productsData.years);

    setYearSelectOptions(yearOptions);
  }, [productsData]);

  useEffect(() => {
    if (!productsData) {
      return;
    }

    const productOptions = createOptionsFromProductsData(
      productsData,
      selectedProductsOptions,
    );

    const filteredProductsOptions = filterSelectedProductsOptions(
      selectedProductsOptions,
      productOptions,
    );

    setProductSelectOptions(productOptions);
    setFilteredSelectedProductsOptions(filteredProductsOptions);
  }, [selectedProductsOptions, productsData]);

  useEffect(() => {
    if (!productsData) {
      return;
    }

    const filteredProducts = filterSelectedProducts(
      productsData.products,
      filteredSelectedProductsOptions,
    );
    setSelectedProducts(filteredProducts);
  }, [filteredSelectedProductsOptions, productsData]);

  if (!productsData) {
    return null;
  }

  return (
    <>
      <div css={productsCalculatorStyles.selectContainer}>
        <div css={productsCalculatorStyles.selectWrapper}>
          <p>Wybierz produkty z listy</p>
          <Select
            name="products"
            closeMenuOnSelect={false}
            options={productSelectOptions}
            isMulti
            onChange={handleSelectedProductsOptionsChange}
            value={filteredSelectedProductsOptions}
          />
        </div>
        <div css={productsCalculatorStyles.selectWrapper}>
          <p>Wybierz rok</p>
          <Select
            name="years"
            value={yearSelectOptions.find(
              (year) => year.value === String(selectedYear),
            )}
            options={yearSelectOptions}
            onChange={handleSelectedYearChange}
          />
        </div>
      </div>
      <div css={productsCalculatorStyles.listContainer}>
        <ul css={productsCalculatorStyles.selectedProductsList}>
          {selectedProducts.map((product) => {
            const { id, name, prices } = product;
            return <ProductItem key={id} name={name} prices={prices} />;
          })}
        </ul>
      </div>
      <div css={productsCalculatorStyles.priceContainer}>
        Cena wybranych usług: {sumPrice.toFixed(2)} zł
      </div>
    </>
  );
};
