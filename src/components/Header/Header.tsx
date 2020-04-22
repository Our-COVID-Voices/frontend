import React, { FunctionComponent, useState } from "react";
import ReactSVG from "react-svg";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import Cookies from "../Cookies";
import DonateButton from "../DonateButton/DonateButton";
import Logo from "../../assets/logo/logo_colour.svg";
import LogoWhite from "../../assets/logo/logo_white.svg";
import Menu from "../../assets/icons/menu.svg";
import Account from "../../assets/icons/account-light.svg";

import "./Header.scss";
import UserHeader from "./UserHeader";
import Dropdown from "./Dropdown/Dropdown";

interface IProps {
  loggedIn: boolean;
}

const Header: FunctionComponent<IProps> = ({ loggedIn }) => {
  const [open, toggleBurger] = useState(false);

  return (
    <header>
      <div
        className={cx({
          "mobile-nav--active": open,
        })}
      >
        <Cookies />
        <div className="tablet-hide">
          <UserHeader />
        </div>
        <div
          className={cx({
            "header--logged-in": loggedIn,
          })}
        >
          <nav
            className={cx(
              "flex-container flex-container--no-padding flex-container--center header",
              {
                "header--logged-in": loggedIn,
              }
            )}
          >
            <NavLink
              to="/"
              className="header--link"
              activeClassName="header--link--active"
            >
              <ReactSVG
                src={loggedIn ? LogoWhite : Logo}
                className="header--logo"
                wrapper="span"
              />
            </NavLink>

            {/* Mobile Nav */}

            <button
              className={cx("tablet-show mobile-nav--button", {
                "mobile-nav--button--logged-in": loggedIn,
              })}
              onClick={() => toggleBurger(!open)}
            >
              <span>
                Menu <ReactSVG src={Menu} wrapper="span" />
              </span>
            </button>

            <div
              className={cx(
                "flex-container flex-container--no-padding flex-container--align-center header--links tablet-hide",
                {
                  "header--links--logged-in": loggedIn,
                }
              )}
            >
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

              <Dropdown loggedIn={loggedIn} />

              <DonateButton text="Donate" loggedIn={loggedIn} />
            </div>
          </nav>
        </div>

        {/* 
        Expanded Mobile Nav */}

        {open && (
          <div className="mobile-nav--inner tablet-show">
            <NavLink
              className="mobile-nav--link"
              to="/"
              onClick={() => toggleBurger(!open)}
            >
              Home
            </NavLink>
            <NavLink
              className="mobile-nav--link"
              to="/browse"
              onClick={() => toggleBurger(!open)}
            >
              Browse Experiences
            </NavLink>
            <NavLink
              className="mobile-nav--link"
              to="/contact"
              onClick={() => toggleBurger(!open)}
            >
              Contact
            </NavLink>
            <NavLink
              className="mobile-nav--link"
              to="/about"
              onClick={() => toggleBurger(!open)}
            >
              About The Project
            </NavLink>

            <NavLink
              className="mobile-nav--link mobile-nav--link-secondary"
              to="/why"
              onClick={() => toggleBurger(!open)}
            >
              Why we're doing this
            </NavLink>
            <NavLink
              className="mobile-nav--link mobile-nav--link-secondary"
              to="/how"
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
              Login{" "}
              <ReactSVG
                src={Account}
                wrapper="span"
                className="mobile-nav--icon"
              />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
