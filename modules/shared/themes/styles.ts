import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(218, 138, 214)",
    container: "#D9D9D9",
    text: "rgb(63, 63, 63)",
  },
};
export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(218, 138, 214)",
    container: "rgb(82, 82, 82)",
    text: "rgb(233, 233, 233)",
  },
};

export const colors = {
  background: "#D9D9D9",
};
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const text = {
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 22,
  xxl: 24,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
};

export const thumbnailImage = {
  width: 80,
  height: 70,
  borderRadius: borderRadius.md,
  padding: spacing.xs,
  backgroundColor: "white",
};
export const h1 = {
  fontSize: text.xl,
  fontWeight: "bold",
  textAlign: "center",
};
export const root = {
  flex: 1,
  padding: spacing.md,
};
