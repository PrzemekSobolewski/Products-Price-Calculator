import { ProductsData } from "../context/productsCalculatorContext/productsCalculator-context.types";

export const mockedProductsData: ProductsData = {
  products: [
    {
      id: 1,
      name: "Internet",
      requiredProductsIds: [],
      prices: [
        {
          year: 2023,
          price: 39.0,
        },
        {
          year: 2024,
          price: 49.0,
        },
        {
          year: 2025,
          price: 59.0,
        },
      ],
    },
    {
      id: 2,
      name: "Telewizja",
      requiredProductsIds: [],
      prices: [
        {
          year: 2023,
          price: 49.0,
        },
        {
          year: 2024,
          price: 49.0,
        },
        {
          year: 2025,
          price: 59.0,
        },
      ],
    },
    {
      id: 3,
      name: "Abonament telefoniczny",
      requiredProductsIds: [],
      prices: [
        {
          year: 2023,
          price: 29.0,
        },
        {
          year: 2024,
          price: 29.0,
        },
        {
          year: 2025,
          price: 29.0,
        },
      ],
    },
    {
      id: 4,
      name: "Dekoder 4K",
      requiredProductsIds: [2],
      prices: [
        {
          year: 2023,
          price: 29.0,
        },
        {
          year: 2024,
          price: 29.0,
        },
        {
          year: 2025,
          price: 29.0,
        },
      ],
    },
  ],
  years: [2023, 2024, 2025],
  promotions: [
    {
      id: 1,
      productsIds: [1, 2],
      correlatedProductsIds: [1, 2],
      prices: [
        {
          year: 2023,
          price: 79.0,
        },
        {
          year: 2024,
          price: 89.0,
        },
        {
          year: 2025,
          price: 99.0,
        },
      ],
    },
    {
      id: 2,
      productsIds: [4],
      correlatedProductsIds: [1, 2],
      prices: [
        {
          year: 2023,
          price: 0.0,
        },
        {
          year: 2024,
          price: 0.0,
        },
        {
          year: 2025,
          price: 0.0,
        },
      ],
    },
  ],
};
