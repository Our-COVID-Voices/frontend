import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import { withRouter, RouteComponentProps } from "react-router";

import "./WritingGuidance.scss";

import { cms } from "../../utils/cms";

import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import DonateButton from "../../components/DonateButton/DonateButton";

import BackgroundBubbles from "../../assets/images/large-medium-bubble.svg";
import ReactSVG from "react-svg";

const WritingGuidance: FunctionComponent<RouteComponentProps> = ({
  history,
}) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices | What we have found</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center writing-guidance">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "What we have found", url: "" },
        ]}
      />
      <div className="flex-col--12 writing-guidance--container">
        <h1 className="writing-guidance--title">Welcome</h1>
        <div className="writing-guidance--content">
          <p>
            The findings from our project are presented in a report:{" "}
            <a href="/#" target="__blank">
              What We Need Now.
            </a>
          </p>
          <p>
            The report summarises how National Voices engaged with people who
            have ongoing health and care needs during the first phase of the
            pandemic and how this engagement led to a set of statements that
            describe what people who use health and care services now expect
            these services to look and feel like.
          </p>
          <p>On this page you can download:</p>
          <ul>
            <li>The full report</li>
            <li>The I statements</li>
            <li>The recommendations</li>
            <li>The illustrations</li>
            <li>The video</li>
          </ul>
        </div>
      </div>
      <ReactSVG
        src={BackgroundBubbles}
        className="writing-guidance--background tablet--large-hide"
      />
    </div>

    <Footer purple={true}>
      <div className="flex-container flex-container--center home--footer writing-guidance--footer">
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
          <h5 className="home--footer--title">{cms("home.footer.title")}</h5>
          <p
            className="home--footer--content"
            dangerouslySetInnerHTML={{ __html: cms("home.footer.content") }}
          ></p>
          <div className="flex-col--12 home--footer--button">
            <DonateButton />
          </div>
          <h6 className="home--footer--contact">
            {cms("home.footer.contact")}{" "}
            <a href={`mailto:${cms("global.email")}`}>{cms("global.email")}</a>
          </h6>
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(WritingGuidance);
