import { ThemeConfig } from "antd";

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
export type ThemeBreakpoints = keyof Theme["breakpoints"];
export type ThemeSpacings = keyof Theme["spacing"];

export const theme = {
  colors: {
    primary: "#A5222D",
    secondary: "#EFA32D",
    accent: "#FFCC7C",
    accentLight: "#FFF4E4",
    white: "#FFFDFA",
    black: "#36363",
  },
  breakpoints: {
    xxs: "320px",
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  spacing: {
    "0": "0px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    xxl: "24px",
    xxxl: "32px",
    xxxxl: "64px",
  },
  shadow: {
    sm: "0 4px 6px rgba(0, 0, 0, 0.1)",
    md: "0 6px 12px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
} as const;

export const antTheme: ThemeConfig = {
  token: {
    fontFamily: "inherit",
    colorPrimary: theme.colors.primary,
  },
  components: {
    Button: {
      borderRadius: 16,
      defaultBg: theme.colors.accentLight,
      defaultBorderColor: "transparent",
      defaultColor: theme.colors.primary,
      fontWeight: 600,
    },
    Layout: {
      headerBg: theme.colors.white,
      headerColor: theme.colors.primary,
      headerHeight: 70,
    },
    Typography: {
      titleMarginBottom: theme.spacing[0],
    },
  },
};
