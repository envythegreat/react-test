// ButtonComponent.tsx
import React from "react";

interface ButtonComponentProps {
  text: string;
  backgroundColor?: string;
  icon?: React.ReactNode; // Icon can be any valid React node
  onClick: () => void;
  classes?: string;
}

const Button: React.FC<ButtonComponentProps> = ({
  backgroundColor,
  icon,
  onClick,
  text,
  classes,
}) => {
  return (
    <button
      style={{ backgroundColor }}
      className={classes ? classes : "custom-button"}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default Button;
