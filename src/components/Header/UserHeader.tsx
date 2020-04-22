import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

import Account from "../../assets/icons/account-light.svg";

import "./Header.scss";
import UserStore from "../../stores/userStore";

interface IProps {
  userStore?: UserStore;
}

const UserHeader: FunctionComponent<IProps> = ({ userStore }) => {
  if (!userStore) return null;

  return (
    <div className="flex-container flex-container--no-padding flex-container--full-width user-header">
      {userStore.loggedIn && (
        <NavLink
          to="/dashboard"
          className="user-header--link"
          activeClassName="header--link--active"
        >
          Dashboard
        </NavLink>
      )}

      {userStore.loggedIn && (
        <NavLink
          to="/my-experiences"
          className="user-header--link"
          activeClassName="header--link--active"
        >
          My Experiences
        </NavLink>
      )}

      {userStore.loggedIn && (
        <NavLink
          to="/account"
          className="user-header--link"
          activeClassName="header--link--active"
        >
          Settings
        </NavLink>
      )}
      <NavLink
        to="/login"
        className="user-header--link user-header--link--login"
        activeClassName="header--link--active"
      >
        {userStore.loggedIn ? "Log Out" : "Log In"}
        <ReactSVG src={Account} wrapper="span" className="header--icon" />
      </NavLink>
    </div>
  );
};

export default inject("userStore")(observer(UserHeader));
