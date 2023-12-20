import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../styles/sprinkles.css";

export const button = recipe({
  base: {
    borderRadius: 4,
    border: "none",
    fontWeight: 500,
    cursor: "pointer",
  },
  variants: {
    variant: {
      solid: sprinkles({}),
      outline: [sprinkles({})],
    },
    color: {
      neutral: { background: "whitesmoke" },
      brand: { background: "blueviolet" },
      accent: { background: "slateblue" },
    },
    size: {
      sm: sprinkles({
        paddingX: "medium",
        paddingY: "small",
      }),
      md: sprinkles({
        paddingX: "large",
        paddingY: "medium",
      }),
      lg: sprinkles({
        paddingX: "xLarge",
        paddingY: "large",
      }),
    },
  },
  compoundVariants: [
    {
      variants: { variant: "solid", color: "accent" },
      style: [
        sprinkles({
          background: "blue-100",
        }),
        { borderColor: "blue" },
      ],
    },
  ],
});

export type ButtonVariants = RecipeVariants<typeof button>;
