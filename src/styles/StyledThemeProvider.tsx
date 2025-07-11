import type { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

type ThemeProviderProps = {
  children: ReactNode;
};

const StyledThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
