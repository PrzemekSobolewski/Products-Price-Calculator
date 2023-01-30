import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./utils/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
