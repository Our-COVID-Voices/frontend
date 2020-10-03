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
    </Layout>
  );
};

export default inject("experienceStore")(observer(withRouter(Browse)));
