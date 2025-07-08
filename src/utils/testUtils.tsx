import { type FC, type ReactElement, type ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import type { Theme } from "../entities/theme";

type AllProviderProps = {
  children: ReactNode;
};


const theme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1A1A1A",
    background: "#FFFFFF",
    text: "#333333",
    linkColor: "#646CFF",
    danger: "#FF3D00",
    border: "#E0E0E0",
    tableHeader: "#007bff",
    tableRowEven: "#f8f9fa",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders: FC<AllProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
