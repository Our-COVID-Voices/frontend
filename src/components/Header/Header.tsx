import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { NavLink } from "react-router-dom";

import Cookies from "../Cookies";
import DonateButton from "../DonateButton/DonateButton";
import Logo from "../../assets/logo/logo_colour.svg";

import "./Header.scss";
import UserHeader from "./UserHeader";

interface IProps {
  loggedIn: boolean;
}

const Header: FunctionComponent<IProps> = ({ loggedIn }) => (
  <header>
    <Cookies />
    <UserHeader />
    <div className="flex-container flex-container--no-padding flex-container--center header">
      <NavLink
        to="/"
        className="header--link"
        activeClassName="header--link--active"
      >
        <ReactSVG src={Logo} className="header--logo" wrapper="span" />
      </NavLink>

      <div className="flex-container flex-container--no-padding flex-container--align-center header--links">
        <NavLink
          className="header--link"
          to="/browse"
          activeClassName="header--link--active"
        >
          Browse Experiences
        </NavLink>
        <NavLink
          className="header--link"
          to="/contact"
          activeClassName="header--link--active"
        >
          Contact
        </NavLink>
        
        <NavLink
          className="header--link"
          to="/about"
          activeClassName="header--link--active"
        >
          About The Project
        </NavLink>


        <DonateButton text="Donate" loggedIn={loggedIn} />
      </div>
    </div>
  </header>
);

export default Header;
