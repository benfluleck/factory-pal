// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalCssStyle } from "./styles/GlobalCssStyle.tsx";
import StyledThemeProvider from "./styles/StyledThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <StyledThemeProvider>
      <GlobalCssStyle />
      <App />
    </StyledThemeProvider>
  // </StrictMode>
);
