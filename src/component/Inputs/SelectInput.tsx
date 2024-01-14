import React from "react";
import { Input, FormGroup } from "reactstrap";
interface Option {
  label: string;
  value: string | number;
}
interface SelectInputProps {
  name: string;
  id: string;
  options: Option[];
  value: string;
  onChange: (name: string, value: string) => void; // Correct the signature
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  id,
  options,
  value,
  onChange,
}) => {
  return (
    <FormGroup>
      {/* <Label for={name}>{name}</Label> */}
      <Input
        type="select"
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="custom-input"
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default SelectInput;
