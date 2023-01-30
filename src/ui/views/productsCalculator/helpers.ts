import {
  Product,
  ProductsData,
} from "../../../context/productsCalculatorContext/productsCalculator-context.types";

export const createOptionsFromYears = (years: number[]) => {
  return years.map((year) => {
    return { value: String(year), label: String(year) } as SelectOption;
  });
};

export const createOptionsFromProductsData = (
  productsData: ProductsData,
  selectedProducts: SelectOption[],
) => {
  const productOptionsData = productsData.products.map((product) => {
    const { id, name } = product;

    const isEnabled = product.requiredProductsIds.every((requiredProductId) =>
      selectedProducts.find(
        (selectedProduct) =>
          selectedProduct.value === String(requiredProductId),
      ),
    );

    return {
      value: String(id),
      label: name,
      isDisabled: !isEnabled,
    } as SelectOption;
  });

  return productOptionsData;
};

export const filterSelectedProductsOptions = (
  selectedProductsOptions: SelectOption[],
  productsOptions: SelectOption[],
) => {
  return productsOptions.filter((option) =>
    selectedProductsOptions.find(
      (selectedProduct) =>
        selectedProduct.value === option.value && !option.isDisabled,
    ),
  );
};

export const filterSelectedProducts = (
  products: Product[],
  filteredSelectedProductsOptions: SelectOption[],
) => {
  return products.filter((product) =>
    filteredSelectedProductsOptions.find(
      (selectedProduct) => selectedProduct.value === String(product.id),
    ),
  );
};
