import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import ReactSVG from "react-svg";
import { withRouter, RouteComponentProps } from "react-router";

import { cms } from "../../utils/cms";
import BackgroundBubbles from "../../assets/images/large-medium-bubble.svg";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const Contact: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices | Contact</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center faq">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "Contact", url: "" },
        ]}
      />

      <div className="flex-col--12 faq--container">
        <div className="faq--content">
          <p>
            For problems with the site, your uploaded experiences, technical
            problems or any other issues related to this site and project please
            read our Frequently Asked Questions or contact{" "}
            <a href="mailto:info@nationalvoices.org.uk">
              info@nationalvoices.org.uk
            </a>
            .
          </p>

          <p>
            For press enquiries, permissions requests or for further information
            about the project contact{" "}
            <a href="mailto:info@nationalvoices.org.uk">
              info@nationalvoices.org.uk
            </a>
            .
          </p>
        </div>
      </div>
      <ReactSVG
        src={BackgroundBubbles}
        className="faq--background tablet--large-hide"
      />
    </div>
    <Footer purple={true}>
      <div className="flex-container flex-container--center flex-container--no-padding flex-container--align-center browse--footer">
        <div className="flex-col--mobile--12 flex-col--tablet--12 flex-col--8">
          <h5 className="browse--footer--title">{cms("about.footer.title")}</h5>
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

export default withRouter(Contact);
