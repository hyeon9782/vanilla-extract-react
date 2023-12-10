import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./contract.css";

export const lightTheme = createTheme(themeVars, {
  colors: {
    primary: "#000",
    borderColor: "#00f",
  },
});
