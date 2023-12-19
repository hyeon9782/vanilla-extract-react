import { ButtonVariants, button } from "../../styles/button.css";

type ButtonProps = ButtonVariants & {
  label: string;
};

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
