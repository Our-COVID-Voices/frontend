import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  toggleBurger: (toggle: boolean) => void;
  open: boolean;
}

const AboutMenu: FunctionComponent<IProps> = ({ toggleBurger, open }) => (
  <Fragment>
    <NavLink
      className="mobile-nav--link mobile-nav--link-secondary"
      to="/about"
      onClick={() => toggleBurger(!open)}
    >
      Why we have done this
    </NavLink>
    <NavLink
      className="mobile-nav--link mobile-nav--link-secondary"
      to="/what-we-need-now"
      onClick={() => toggleBurger(!open)}
    >
      What have we found
    </NavLink>
    <NavLink
      className="mobile-nav--link mobile-nav--link-secondary"
      to="/faqs"
      onClick={() => toggleBurger(!open)}
    >
      FAQs
    </NavLink>
  </Fragment>
);

export default AboutMenu;
