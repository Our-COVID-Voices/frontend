import React, { FunctionComponent } from "react";
import ReactSVG from "react-svg";
import { withRouter, RouteComponentProps } from "react-router";
import Helmet from "react-helmet";

import { cms } from "../../utils/cms";

import "./Home.scss";

import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import DonateButton from "../../components/DonateButton/DonateButton";

import SmallBubbles from "../../assets/images/small-bubbles.png";
import LaptopBubbles from "../../assets/images/laptop-small-bubble.png";
import Calendar from "../../assets/drawings/calendar.svg";
import Flower from "../../assets/drawings/flower.svg";
import Trolley from "../../assets/drawings/trolley.svg";
import InPartnership from "../../components/InPartnership/InPartnership";

const Home: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--center home--welcome">
      <div className="flex-col--8 flex-col--tablet-large--12">
        <h1 className="home--welcome--title">{cms("home.title")}</h1>
        <InPartnership color={false} />
        <img src={SmallBubbles} className="home--welcome--bubbles" alt="" />
        <p
          className="home--welcome--about"
          dangerouslySetInnerHTML={{ __html: cms("home.content") }}
        />
      </div>

      <ReactSVG src={Calendar} className="home--welcome--calendar" />
      <ReactSVG src={Flower} className="home--welcome--flower" />
      <ReactSVG src={Trolley} className="home--welcome--trolley" />
    </div>
    <div className="flex-container flex-container--no-padding flex-container--center home--experiences">
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
        <h4 className="home--share--title">
          {" "}
          <a
            href="https://mailchi.mp/cbb4e70e6e65/e56e9ah8zm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to download the report
          </a>
        </h4>
      </div>
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center home--footer">
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
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--tablet-large--12 flex-col--4 home--footer--image">
          <img src={LaptopBubbles} alt="" />
        </div>
      </div>
    </Footer>
  </Layout>
);

export default withRouter(Home);
