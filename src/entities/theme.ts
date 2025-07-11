export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    linkColor: string;
    danger: string;
    border: string;
    tableHeader: string;
    tableRowEven: string;
    tableHover: string;
    tableRowSelected: string;
    transparent: string;
    cardBackground: string;
    headerText: string;
    number: string;
    percentage: string;
    secs: string;
    hours: string;
  };
  fontWeights: {
    light: number;
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  space: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  boxShadow: {
    card: string;
    cardHover: string;
  };
}
