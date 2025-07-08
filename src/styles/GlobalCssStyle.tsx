import { createGlobalStyle } from "styled-components";

export const GlobalCssStyle = createGlobalStyle`
  ${({ theme }) => {
    const { 
      fontWeights, 
      colors 
    } = theme;

    return `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: ${fontWeights.regular};

        color-scheme: light dark;
        color: ${colors.text};
        background-color: ${colors.background};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        font-weight: ${fontWeights.semibold};
        color: ${colors.linkColor};
        text-decoration: inherit;
      }
    `;
  }}
`;
