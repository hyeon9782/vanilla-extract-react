import { style } from "@vanilla-extract/css";

export const calendar = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 800,
});

export const day = style({
  width: 100,
  height: 100,
  border: "1px solid lightgray",
  borderRadius: 15,
});
