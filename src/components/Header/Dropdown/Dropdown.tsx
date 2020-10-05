import React, { useState, FunctionComponent } from "react";
import cx from "classnames";

import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface IProps {
  loggedIn: boolean;
}

const Dropdown: FunctionComponent<IProps> = ({ loggedIn }) => {
  const [open, toggleDropdown] = useState(false);

  return (
    <div className="dropdown--container">
      <button
        aria-expanded={open}
        aria-controls="menu-list"
        onClick={() => toggleDropdown(!open)}
        className={cx("dropdown--button", {
          "dropdown--button--logged-in": loggedIn,
        })}
      >
        About the project
        <FontAwesomeIcon
          icon={open ? "chevron-up" : "chevron-down"}
          className="dropdown--button--icon"
        />
      </button>

      {open && (
        <div
          className={cx("dropdown--menu", {
            "dropdown--menu--logged-in": loggedIn,
          })}
          id="menu-list"
        >
          <NavLink
            className="dropdown--link"
            activeClassName={cx("dropdown--link--active", {
              "dropdown--link--active--logged-in": loggedIn,
            })}
            to="/about"
          >
            Why we have done this
          </NavLink>
          <NavLink
            className="dropdown--link"
            activeClassName={cx("dropdown--link--active", {
              "dropdown--link--active--logged-in": loggedIn,
            })}
            to="/what-we-need-now"
          >
            What have we found
          </NavLink>
          <NavLink
            className="dropdown--link"
            to="/faqs"
            activeClassName={cx("dropdown--link--active", {
              "dropdown--link--active--logged-in": loggedIn,
            })}
          >
            FAQs
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
