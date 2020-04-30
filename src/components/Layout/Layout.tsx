import React, { FunctionComponent } from "react";
import { observer, inject } from "mobx-react";

import UserStore from "../../stores/userStore";
import Header from "../Header";

interface IProps {
  children: JSX.Element | JSX.Element[];
  userStore?: UserStore;
  className?: string;
}

const Layout: FunctionComponent<IProps> = ({ children, userStore }) => {
  if (!userStore) return null;

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header loggedIn={userStore.loggedIn} />
      {children}
    </div>
  );
};

export default inject("userStore")(observer(Layout));
