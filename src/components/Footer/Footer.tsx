import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Footer.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  purple?: boolean;
  grey?: boolean;
  green?: boolean;
  navy?: boolean;
}

const Footer: FunctionComponent<IProps> = ({
  children,
  purple,
  grey,
  green,
  navy,
  className,
}) => (
  <footer
    className={cx("footer", {
      "footer--purple": purple,
      "footer--grey": grey,
      "footer--green": green,
      "footer--navy": navy,
      [`${className}`]: className,
    })}
  >
    {children}
  </footer>
);

export default Footer;
