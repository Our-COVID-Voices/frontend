import React, { FunctionComponent, useState, useEffect, Fragment } from "react";
import ReactSVG from "react-svg";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import Cookies from "../Cookies";
import DonateButton from "../DonateButton/DonateButton";
import Logo from "../../assets/logo/logo_colour.svg";
import LogoWhite from "../../assets/logo/logo_white.svg";
import Menu from "../../assets/icons/menu.svg";
import User from "../../assets/icons/user.svg";

import "./Header.scss";
import UserHeader from "./UserHeader";
import Dropdown from "./Dropdown/Dropdown";
import Button from "../Button";
import AboutMenu from "./AboutMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  loggedIn: boolean;
}

const Header: FunctionComponent<IProps> = ({ loggedIn }) => {
  const [open, toggleBurger] = useState(false);
  const [expandedMenu, expandMenu] = useState(false);

  useEffect(() => {
    if (open) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }, [open]);

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
                Menu{" "}
                {open ? (
                  <FontAwesomeIcon
                    icon="times"
                    className="mobile-nav--button--close"
                  />
                ) : (
                  <ReactSVG src={Menu} wrapper="span" />
                )}
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

              <DonateButton navy={loggedIn} />
            </div>
          </nav>
        </div>

        {/* 
        Expanded Mobile Nav */}

        {open && (
          <div className="tablet-show">
            <div
              className={cx("mobile-nav--inner ", {
                "mobile-nav--full-height": !loggedIn,
              })}
            >
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

              {!expandedMenu && loggedIn && (
                <button
                  onClick={() => expandMenu(!expandedMenu)}
                  className="mobile-nav--expand"
                >
                  See more
                </button>
              )}

              {expandedMenu && loggedIn && (
                <AboutMenu toggleBurger={toggleBurger} open={open} />
              )}

              {!loggedIn && (
                <AboutMenu toggleBurger={toggleBurger} open={open} />
              )}
            </div>
            {loggedIn && (
              <div className="mobile-nav--logged-in">
                <ReactSVG src={User} className="mobile-nav--logged-in--icon" />

                <div className="mobile-nav--logged-in--links">
                  <NavLink
                    className="mobile-nav--link"
                    to="/dashboard"
                    onClick={() => toggleBurger(!open)}
                  >
                    Dashboard
                  </NavLink>

                  <NavLink
                    className="mobile-nav--link"
                    to="/my-experiences"
                    onClick={() => toggleBurger(!open)}
                  >
                    My Experiences
                  </NavLink>

                  <NavLink
                    className="mobile-nav--link"
                    to="/account"
                    onClick={() => toggleBurger(!open)}
                  >
                    Settings
                  </NavLink>

                  <Button text="Logout" navy={true} small={true} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
