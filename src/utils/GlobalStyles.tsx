import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
        font-family: "Roboto", "HelveticaNeue", "Helvetica Neue", sans-serif;
        font-size: 16px;
        @media only screen and (max-width: 1024px) {
          font-size: 14px;
        }
        @media only screen and (max-width: 560px) {
          font-size: 12px;
        }
      }
    `}
  />
);
