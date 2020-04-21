import React, { useState } from "react";

import "./Dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const [open, toggleDropdown] = useState(false);

  return (
    <div className="dropdown--container">
      <button
        aria-expanded={open}
        aria-controls="menu-list"
        onClick={() => toggleDropdown(!open)}
        className="dropdown--button"
      >
        About the project{" "}
        <FontAwesomeIcon
          icon={open ? "chevron-up" : "chevron-down"}
          className="dropdown--button--icon"
        />
      </button>

      {open && (
        <div className="dropdown--menu" id="menu-list">
          <NavLink
            className="dropdown--link"
            activeClassName="dropdown--link--active"
            to="/why"
          >
            Why we're doing this
          </NavLink>
          <NavLink
            className="dropdown--link"
            activeClassName="dropdown--link--active"
            to="/how"
          >
            What can I write about and how do I do this?
          </NavLink>
          <NavLink
            className="dropdown--link"
            to="/faqs"
            activeClassName="dropdown--link--active"
          >
            FAQs
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
