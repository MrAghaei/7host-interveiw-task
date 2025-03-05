import "./CustomButton.scss";
import { JSX } from "react";
//region data types
interface ButtonDataProps {
  text: string;
  type: "filled" | "outlined" | "simple";
  color?: "primary" | "secondary";
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
}

//endregion
function CustomButton({
  text,
  type,
  color,
  rightIcon,
  leftIcon,
}: ButtonDataProps) {
  return (
    <button
      className={`d-flex gap-custom-4 btn custom-button ${type} ${color}`}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
}

export default CustomButton;
