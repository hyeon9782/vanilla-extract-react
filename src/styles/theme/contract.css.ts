import { createThemeContract } from "@vanilla-extract/css";

// 코드 스플리팅을 위해 css를 생성하지 않는 createThemeContract 사용
export const themeVars = createThemeContract({
  colors: {
    primary: "",
    borderColor: "",
  },
});
