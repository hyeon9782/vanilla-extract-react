import { input } from "./input.css";

type InputProps = {
  placeholder: string;
  variant: string;
};

const Input = ({ placeholder, variant }: InputProps) => {
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
