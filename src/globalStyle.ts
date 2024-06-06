import { createGlobalStyle } from "styled-components";
import Rubik from "./assets/fonts/Rubik/Rubik-Regular.ttf";
import RubikBold from "./assets/fonts/Rubik/Rubik-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Rubik";
  src: url(${Rubik}) format("truetype");
}

@font-face {
  font-family: "Rubik-Bold";
  src: url(${RubikBold}) format("truetype");
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  height: 100%;
  width: 100%;
  font-family: "Rubik", sans-serif;
  background-color: ${({ theme }) => theme.colors.accentLight};
}


#root {
  padding: 0px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xxl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxxl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 64px;
  }
}
`;
