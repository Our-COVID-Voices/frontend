import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./DonateButton.scss";

interface IProps {
  navy?: boolean;
}

const DonateButton: FunctionComponent<IProps> = ({ navy = false }) => {
  return (
    <a
      href="https://donorbox.org/our-covid-voices"
      className={cx("donate-button", {
        "donate-button--navy": navy,
      })}
    >
      Donate
    </a>
  );
};

export default DonateButton;
