import { recipe } from "@vanilla-extract/recipes";

export const input = recipe({
  base: {},
  variants: {
    variant: {
      outline: {},
      flushed: {},
      unstyled: {},
    },
  },
});
