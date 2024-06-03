import { ThemeConfig } from "antd";

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
export type ThemeBreakpoints = keyof Theme["breakpoints"];
export type ThemeSpacings = keyof Theme["spacing"];

export const theme = {
  colors: {
    primary: "rgb(3, 54, 64)",
    secondary: "rgb(228, 167, 22)",
    white: "#ffffff",
    black: "#000000",
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  spacing: {
    "0": "0px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    xxl: "24px",
    xxxl: "32px",
  },
} as const;

export const antTheme: ThemeConfig = {
  token: {
    fontFamily: "inherit",
    colorPrimary: theme.colors.primary,
  },
  components: {
    Layout: {
      headerBg: theme.colors.primary,
      headerColor: theme.colors.secondary,
    },
    Typography: {
      titleMarginBottom: theme.spacing[0],
    },
  },
};
