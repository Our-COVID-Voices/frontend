import React, { FunctionComponent } from "react";
import cx from "classnames";

import "./Link.scss";

interface IProps {
  text: string;
  href: string;
  size: "small" | "medium" | "large";
  purple?: boolean;
  green?: boolean;
  newWindow?: boolean;
}

const Link: FunctionComponent<IProps> = ({
  text,
  href,
  size,
  purple,
  green,
  newWindow
}) => (
  <a
    href={href}
    className={cx(`link link--${size}`, {
      "link--purple": purple,
      "link--green": green
    })}
    target={newWindow ? "__blank" : "__self"}
  >
    {text}
  </a>
);

export default Link;
