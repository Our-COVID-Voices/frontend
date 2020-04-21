import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./DonateButton.scss";

interface IProps {
  text: string;
  onClick?: (event?: any) => void;
  loggedIn?: boolean;
}

const DonateButton: FunctionComponent<IProps> = ({
  onClick,
  text,
  loggedIn = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx("donate-button", {
        "donate-button--logged-in": loggedIn,
      })}
    >
      {text}
    </button>
  );
};

export default DonateButton;
