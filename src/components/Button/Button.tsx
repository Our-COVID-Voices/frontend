import React, { FunctionComponent, forwardRef, RefObject } from "react";
import cx from "classnames";

import "./Button.scss";

interface IProps {
  text: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: (event?: any) => void;
  twoCol?: boolean;
  small?: boolean;
  filter?: boolean;
  purple?: boolean;
  ref?: RefObject<HTMLButtonElement>;
  navy?: boolean;
}

const Button: FunctionComponent<IProps> = forwardRef(
  (
    { text, type, disabled, onClick, twoCol, small, filter, purple, navy },
    ref
  ) => {
    return (
      <button
        disabled={disabled}
        type={type ? type : "button"}
        onClick={onClick}
        className={cx("button", {
          "button--two-col": twoCol,
          "button--small": small,
          "button--filter": filter,
          "button--purple": purple,
          "button--navy": navy,
        })}
        ref={ref}
      >
        {text}
      </button>
    );
  }
);

export default Button;
