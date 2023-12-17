import { ButtonVariants, button } from "../styles/button.css";

type ButtonProps = ButtonVariants & {
  label: string;
};

const Button = ({ color, size, label }: ButtonProps) => {
  return (
    <button
      className={button({
        color,
        size,
      })}
    >
      {label}
    </button>
  );
};

export default Button;
