import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { Helmet } from "react-helmet";
import { withRouter, RouteComponentProps } from "react-router";

import { cms } from "../../utils/cms";

import "./NotFound.scss";

import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Pencil from "../../assets/icons/pencil.svg";
import Community from "../../assets/icons/community.svg";
import Security from "../../assets/icons/security.svg";
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
    <div className="flex-container flex-container--center flex-container--align-center home--share">
      <div className="flex-col--12">
        <h4 className="home--share--title">{cms("home.share.title")}</h4>
      </div>
      <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--6">
        <div className="flex-col--tablet--10 flex-col--mobile--12 flex-col--mobile-small--12 home--share--description--container">
          <div className="home--share--description">
            <ReactSVG src={Pencil} wrapper="span" />
            <h5 style={{ display: "inline" }}>
              {cms("home.share.experiences")}
            </h5>
          </div>

          <div className="home--share--description">
            <ReactSVG src={Community} wrapper="span" />
            <h5 style={{ display: "inline" }}>{cms("home.share.community")}</h5>
          </div>

          <div className="home--share--description">
            <ReactSVG src={Security} wrapper="span" />
            <h5 style={{ display: "inline" }}>
              {cms("home.share.contributions")}
            </h5>
          </div>
        </div>
      </div>
      <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--5 home--share--button-container">
        <Button
          text="Sign up and share"
          onClick={() =>
            history.push({
              pathname: "/register",
            })
          }
          navy={true}
        />
        <p className="home--share--content">{cms("home.share.content")}</p>
      </div>
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center home--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h5 className="home--footer--title">{cms("home.footer.title")}</h5>
          <p
            className="home--footer--content"
            dangerouslySetInnerHTML={{ __html: cms("home.footer.content") }}
          />
        </div>
        <div className="flex-col--8 flex-col--tablet-large--12">
          <p className="home--footer--contact">
            {cms("home.footer.contact")}{" "}
            <a href={`mailto:${cms("global.email")}`}>{cms("global.email")}</a>
          </p>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(NotFound);
