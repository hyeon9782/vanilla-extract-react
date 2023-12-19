import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Forms/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "accent",
    size: "lg",
    label: "Button",
  },
};
