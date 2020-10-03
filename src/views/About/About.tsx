import React, { FunctionComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { inject } from "mobx-react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helmet from "react-helmet";

import "./About.scss";
import Breadcrumb from "../../components/Breadcrumb";
import { cms } from "../../utils/cms";

import Layout from "../../components/Layout";
import UserStore from "../../stores/userStore";

import BackgroundBubbles from "../../assets/images/large-medium-bubble.svg";
import ReactSVG from "react-svg";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const About: FunctionComponent<IProps> = ({ userStore, history }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Our COVID Voices | About</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center about">
        <div
          className={cx("flex-col--12", {
            "my-account--back--container": userStore.loggedIn,
          })}
        >
          {userStore.loggedIn ? (
            <button
              onClick={() => history.goBack()}
              className="privacy-policy--back"
            >
              <FontAwesomeIcon icon="chevron-left" /> Back
            </button>
          ) : (
            <Breadcrumb
              crumbs={[
                { text: "Home", url: "/" },
                { text: "Why we have done this", url: "" },
              ]}
            />
          )}
        </div>

        <div className="flex-col--12 about--container">
          <p
            className="about--content"
            dangerouslySetInnerHTML={{ __html: cms("about.content") }}
          />
        </div>
        <ReactSVG
          src={BackgroundBubbles}
          className="about--background tablet--large-hide"
        />
      </div>
      {/* <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center about--footer">
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
            <h4 className="about--footer--title">
              {cms("about.footer.title")}
            </h4>
            <p className="about--footer--content">
              {cms("about.footer.content")}
            </p>
          </div>
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--4 about--footer--button">
            <Button
              text={
                userStore.loggedIn
                  ? "Submit new experience"
                  : "Sign up and share"
              }
              onClick={() =>
                history.push({
                  pathname: userStore.loggedIn
                    ? "/submit-experience"
                    : "/register",
                })
              }
              twoCol={true}
              purple={true}
            />
          </div>
        </div>
      </Footer> */}
    </Layout>
  );
};

export default inject("userStore")(withRouter(About));
