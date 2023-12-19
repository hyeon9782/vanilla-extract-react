import { input } from "../styles/input.css";

type InputProps = {
  placeholder: string;
};

const Input = ({ placeholder }: InputProps) => {
  return <input type="text" className={input({})} placeholder={placeholder} />;
};

export default Input;
