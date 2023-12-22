import { ReactNode } from "react";

type RadioGroupProps = {
  children: ReactNode;
};

const RadioGroup = ({ children }: RadioGroupProps) => {
  return <div>{children}</div>;
};

export default RadioGroup;
