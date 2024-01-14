// InputComponent.tsx
import React, { ChangeEvent } from 'react';
import {Input as BlankInput} from 'reactstrap'

interface InputProps {
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value: any;
  onChange: (event: ChangeEvent<any>) => void; // Change this line
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <BlankInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="custom-input"
    />
  );
};



export default InputComponent;
