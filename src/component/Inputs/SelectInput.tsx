// InputComponent.tsx
import React from "react";
import { FormGroup, Input } from "reactstrap";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value: string | number;
  onChange: (selectedValue: string | number) => void;
}



const SelectInput: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <FormGroup>
      {/* <Label for="exampleSelect">Select</Label> */}
      <Input
        name="select"
        type="select"
        value={value}
        onChange={handleSelectChange}
        className="custom-input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Input>
    </FormGroup>
    // <select value={value} onChange={handleSelectChange} className="custom-select">

    // </select>
  );
};

export default SelectInput;
