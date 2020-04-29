import React, { FunctionComponent } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Checkbox.scss";

interface IProps {
  label: string;
  id: string;
  onChange?: () => void;
  checked: boolean;
  className?: string;
  aria?: string;
}

const Checkbox: FunctionComponent<IProps> = ({
  id,
  checked,
  onChange,
  aria,
  label,
  className,
}) => (
  <div
    className={cx("checkbox", {
      [`${className}`]: className,
    })}
  >
    <input
      type="checkbox"
      id={id}
      name={id}
      checked={checked}
      onChange={onChange}
      aria-label={aria}
    />
    <label htmlFor={id} className="checkbox--container">
      <span id="box">
        <FontAwesomeIcon icon="check" />
      </span>
      <div className="checkbox--label">{label}</div>
    </label>
  </div>
);

export default Checkbox;
