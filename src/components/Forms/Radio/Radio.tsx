import { ReactNode } from "react";

type RadioProps = {
  children: ReactNode;
  size: string;
};

const Radio = ({ children, size }: RadioProps) => {
  return (
    <div>
      <div style={{ borderRadius: "50%" }}></div>
      <div>{children}</div>
    </div>
  );
};

export default Radio;
