import { borderStyles, borderWidths } from "./border";
import { colors } from "./color";
import { radius } from "./radius";
import { shadows } from "./shadow";
import { space } from "./space";
import {
  fontFamilies,
  fontSize,
  fontWeights,
  letterSpacing,
  lineHeights,
  textDecoration,
  typographies,
} from "./typography";

export const tokens = {
  borderStyles,
  borderWidths,
  colors,
  radius,
  shadows,
  space,
  fontFamilies,
  fontSize,
  fontWeights,
  letterSpacing,
  lineHeights,
  textDecoration,
  typographies,
};

export type { Mode } from "./color";
export type Tokens = typeof tokens;
