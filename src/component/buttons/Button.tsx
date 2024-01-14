// ButtonComponent.tsx
import React from "react";

interface ButtonComponentProps {
  text: string;
  backgroundColor?: string;
  icon?: React.ReactNode; // Icon can be any valid React node
  onClick: () => void;
}

const Button: React.FC<ButtonComponentProps> = ({
  backgroundColor,
  icon,
  onClick,
  text,
}) => {
  return (
    <button
      style={{ backgroundColor }}
      className="custom-button"
      onClick={onClick}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default Button;
