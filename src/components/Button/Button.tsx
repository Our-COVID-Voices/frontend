import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Button.scss";

interface IProps {
  text: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick: () => void;
  twoCol?: boolean;
  small?: boolean;
  filter?: boolean;
}

const Button: FunctionComponent<IProps> = ({
  text,
  type = "button",
  disabled,
  onClick,
  twoCol,
  small,
  filter
}) => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className={cx("button", {
      "button--two-col": twoCol,
      "button--small": small,
      "button--filter": filter
    })}
  >
    {text}
  </button>
);

export default Button;
