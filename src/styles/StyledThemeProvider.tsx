import type { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import type { Theme } from "../entities/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

const theme:Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1A1A1A",
    background: "#FFFFFF",
    text: "#333333",
    linkColor:  "#646CFF",
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

const StyledThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
