import { type FC, type ReactElement, type ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

type AllProviderProps = {
  children: ReactNode;
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
