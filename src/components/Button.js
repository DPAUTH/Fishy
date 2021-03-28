import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"]; //This is an array of default CSS button styles

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]; //If the button has it's own style let it be, else give it the default Button CSS style

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={"btn ${checkButtonStyle} ${checkButtonSize}"}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
