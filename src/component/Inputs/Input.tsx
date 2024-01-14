// InputComponent.tsx
import React, { ChangeEvent } from 'react';
import {Input as BlankInput} from 'reactstrap'

interface InputProps {
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value: any;
  onChange: (event: ChangeEvent<any>) => void; // Change this line
  styles?:string
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, value, onChange, styles }) => {
  return (
    <BlankInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles ? styles : "custom-input"}
    />
  );
};



export default InputComponent;
