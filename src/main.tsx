
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalCssStyle } from "./styles/GlobalCssStyle.tsx";
import StyledThemeProvider from "./styles/StyledThemeProvider.tsx";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")!).render(
    <StyledThemeProvider>
      <GlobalCssStyle />
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <App />
      </ErrorBoundary>
    </StyledThemeProvider>
);
