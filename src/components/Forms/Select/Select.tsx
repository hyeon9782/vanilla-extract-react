import { useState } from "react";
type SelectProps = {
  placeholder: string;
  size: string;
  options: string[];
};
const Select = ({ placeholder, options, size }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleOpen = () => {
    setOpen(!open);
  };

  const selectValue = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <section>
      <button onClick={toggleOpen}>{value ? value : placeholder}</button>
      {open && (
        <section>
          {options.map((option) => (
            <div onClick={() => selectValue(option)}>{option}</div>
          ))}
        </section>
      )}
    </section>
  );
};

export default Select;
