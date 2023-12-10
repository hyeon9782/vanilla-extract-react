import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./contract.css";

export const darkTheme = createTheme(themeVars, {
  colors: {
    primary: "#001",
    borderColor: "#999f",
  },
});
