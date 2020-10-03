import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { Helmet } from "react-helmet";
import { withRouter, RouteComponentProps } from "react-router";

import { cms } from "../../utils/cms";

import "./NotFound.scss";

import Button from "../../components/Button";
import Page404Large from "../../assets/icons/page-404-large.svg";
import Page404 from "../../assets/icons/page-404.svg";
import Layout from "../../components/Layout";

const NotFound: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices | Not Found</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center home--welcome not-found">
      <div className="flex-col--8 flex-col--tablet-large--12">
        <ReactSVG
          src={Page404Large}
          className="mobile-show not-found--icon--mobile"
        />
        <h1 className="not-found--title">
          {cms("not-found.title")}
          <ReactSVG
            src={Page404}
            wrapper="span"
            className="mobile-hide not-found--icon"
          />
        </h1>

        <p className="not-found--content">{cms("not-found.content")}</p>
      </div>
    </div>
    <div className="flex-container flex-container--no-padding flex-container--full-width  home--experiences--container">
      <div className="flex-col--12 home--experiences">
        <div className="flex-container flex-container--center flex-container--justify">
          <div className="flex-col--6 flex-col--tablet-large--12">
            <h3 className="home--experiences--title">
              {cms("home.experiences.title")}
            </h3>
            <p className="home--experiences--content">
              {cms("home.experiences.content")}
            </p>
            <Button
              text="Browse experiences"
              onClick={() =>
                history.push({
                  pathname: "/browse",
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default withRouter(NotFound);
