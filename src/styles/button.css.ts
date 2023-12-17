import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    borderRadius: 6,
    border: "none",
  },
  variants: {
    color: {
      neutral: { background: "whitesmoke" },
      brand: { background: "blueviolet" },
      accent: { background: "slateblue" },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
