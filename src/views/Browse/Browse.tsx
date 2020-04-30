import React, { FunctionComponent, useEffect } from "react";
import { inject, observer } from "mobx-react";
import Helmet from "react-helmet";
import { withRouter, RouteComponentProps } from "react-router";

import "./Browse.scss";

import { cms } from "../../utils/cms";
import ExperienceStore from "../../stores/experienceStore";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import AboutAccordian from "../../components/AboutAccordian";
import Search from "./Search";
import Results from "./Results";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import InPartnership from "../../components/InPartnership/InPartnership";
import MediumBubbles from "../../assets/images/bubble-medium-faces.png";

interface IProps extends RouteComponentProps {
  experienceStore: ExperienceStore;
}

const Browse: FunctionComponent<IProps> = ({ experienceStore, history }) => {
  useEffect(() => {
    experienceStore.getTags();
    experienceStore.getExperiences();
  }, [experienceStore]);

  if (!experienceStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Our COVID Voices | Browse</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center browse">
        <div className="flex-col--12">
          <Breadcrumb
            crumbs={[
              { url: "/", text: "Home" },
              { url: "", text: "Experiences" },
            ]}
          />
          <InPartnership color={true} />
        </div>
        <div className="flex-col--8 flex-col--tablet-large--12">
          <p
            className="browse--about mobile-hide"
            dangerouslySetInnerHTML={{ __html: cms("browse.about") }}
          />
          <AboutAccordian
            text={cms("browse.about")}
            className="browse--about--mobile mobile-show"
          />
        </div>
        <img
          src={MediumBubbles}
          alt=""
          className="browse--about--image tablet--large-hide"
        />
      </div>

      <Search />

      <Results />

      <Footer purple={true}>
        <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center browse--footer">
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
            <h5 className="browse--footer--title">
              {cms("about.footer.title")}
            </h5>
            <p className="browse--footer--content">
              {cms("about.footer.content")}
            </p>
          </div>
          <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--4 browse--footer--button">
            <Button
              text="Take part and share your experiences"
              onClick={() =>
                history.push({
                  pathname: "/register",
                })
              }
              twoCol={true}
              purple={true}
            />
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default inject("experienceStore")(observer(withRouter(Browse)));
