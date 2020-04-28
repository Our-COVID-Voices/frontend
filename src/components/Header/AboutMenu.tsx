import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import ReactSVG from "react-svg";

import Account from "../../assets/icons/account-light.svg";

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
      Why we're doing this
    </NavLink>
    <NavLink
      className="mobile-nav--link mobile-nav--link-secondary"
      to="/writing-guidance"
      onClick={() => toggleBurger(!open)}
    >
      What can I write about and how do I do this?
    </NavLink>
    <NavLink
      className="mobile-nav--link mobile-nav--link-secondary"
      to="/faqs"
      onClick={() => toggleBurger(!open)}
    >
      FAQs
    </NavLink>

    <NavLink
      className="mobile-nav--link"
      to="/login"
      onClick={() => toggleBurger(!open)}
    >
      Login
      <ReactSVG src={Account} wrapper="span" className="mobile-nav--icon" />
    </NavLink>
  </Fragment>
);

export default AboutMenu;
