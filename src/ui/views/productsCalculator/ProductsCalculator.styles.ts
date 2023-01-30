import { css } from "@emotion/react";

const sharedContainerStyles = `
    margin: 0 32px;
    @media only screen and (max-width: 1024px) {
      margin: 0 24px;
    }
    @media only screen and (max-width: 560px) {
      justify-content: center;
      margin: 0 16px;
    }
`;

export const productsCalculatorStyles = {
  title: css`
    text-align: center;
    padding: 0 32px;
    @media only screen and (max-width: 1024px) {
      padding: 0 24px;
    }
    @media only screen and (max-width: 560px) {
      padding: 0 16px;
    }
  `,
  selectContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${sharedContainerStyles}
  `,
  selectWrapper: css`
    width: calc(50% - 16px);
  `,
  listContainer: css`
    ${sharedContainerStyles}
  `,
  selectedProductsList: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  priceContainer: css`
    display: flex;
    justify-content: flex-end;
    ${sharedContainerStyles}
  `,
};
