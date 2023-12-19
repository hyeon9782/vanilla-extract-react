import { input } from "../../styles/input.css";

type InputProps = {
  placeholder: string;
  variant: string;
};

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type="text"
      className={input({
        variant,
      })}
      placeholder={placeholder}
    />
  );
};

export default Input;
