import React, { FunctionComponent } from "react";
import cx from "classnames";
import { inject, observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cms } from "../../utils/cms";
import CookiesStore from "../../stores/cookiesStore";

import "./Cookies.scss";

interface IProps {
  loggedIn?: boolean;
  cookieStore?: CookiesStore;
}

const Cookies: FunctionComponent<IProps> = ({ loggedIn, cookieStore }) => {
  if (!cookieStore || cookieStore.cookiesAccepted) return null;

  return (
    <div
      className={cx(
        "flex-container flex-container--mobile-no-padding flex-container--align-center cookies-banner",
        {
          "cookies-banner--grey": loggedIn,
        }
      )}
    >
      <div className="flex-col--mobile--12 mobile-show">
        <div className="flex-container flex-container--mobile-no-padding flex-container--align-center">
          <div className="flex-col--mobile--6">
            <span className="cookies-banner--header">Cookies</span>
          </div>
          <div className="flex-col--mobile--6 cookies-banner--close">
            <span role="button" onClick={() => cookieStore.acceptCookies()}>
              Close
              <FontAwesomeIcon
                icon="times"
                className="cookies-banner--close--icon"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex-col--2 flex-col--tablet--3 flex-col--mobile--7 mobile-hide">
        <span className="cookies-banner--header">Cookies</span>
      </div>

      <div className="flex-col--8 flex-col--tablet--6 flex-col--mobile--12">
        {cms("header.cookies")}
      </div>
      <div className="flex-col--2 flex-col--tablet--3 flex-col--mobile--5 mobile-hide cookies-banner--close">
        <span
          role="button"
          tabIndex={1}
          onClick={() => cookieStore.acceptCookies()}
        >
          Close
          <FontAwesomeIcon
            icon="times"
            className="cookies-banner--close--icon"
          />
        </span>
      </div>
    </div>
  );
};

export default inject("cookieStore")(observer(Cookies));
