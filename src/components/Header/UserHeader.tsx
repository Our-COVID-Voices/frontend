import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

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
    </div>
  );
};

export default inject("userStore")(observer(UserHeader));
