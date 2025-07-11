import type { Theme } from "../entities/theme";

const theme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1A1A1A",
    background: "#FFFFFF",
    text: "#777777",
    headerText: "#555555",
    linkColor: "#646CFF",
    danger: "#FF3D00",
    border: "#E0E0E0",
    tableHeader: "#007BFF",
    tableRowEven: "#F8F9FA",
    tableHover: "#F0F8FF",
    tableRowSelected: "#D1E7FF",
    transparent: "transparent",
    cardBackground: "#1D284F",
    number: "#37B24D",
    percentage: "#4A6BDF",
    secs: "#F59F00",
    hours: "#F76707",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  boxShadow: {
    card: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cardHover: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
};

export default theme;
