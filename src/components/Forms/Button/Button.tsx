import { ButtonVariants, button } from "./button.css";

type ButtonProps = ButtonVariants & {
  label: string;
};

// Gitmoji Test

const Button = ({ color, size, variant, label }: ButtonProps) => {
  return (
    <button
      className={button({
        color,
        size,
        variant,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
