import React, { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import Helmet from "react-helmet";
import ReactSVG from "react-svg";
import { withRouter, RouteComponentProps } from "react-router";

import "./FAQ.scss";
import Breadcrumb from "../../components/Breadcrumb";

import BackgroundBubbles from "../../assets/images/large-medium-bubble.svg";

const FAQ: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices | Frequently Asked Questions</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center faq">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "Frequently Asked Questions", url: "" },
        ]}
      />
      <div className="flex-col--12 faq--container">
        <h1 className="faq--title">Who are National Voices?</h1>
        <div className="faq--content">
          <p>
            National Voices are the umbrella organisation for charities in
            health in care. Our 150 charity members work with people living with
            one or more long term condition, and also support people with
            specific needs, such as people who are homeless or people who use
            British Sign Language to communicate. Our members work with and for
            people living with physical and mental health issues and disability.
            This means we are in touch with millions of people’s experiences.
          </p>
        </div>

        <h1 className="faq--title">Who has come together to do this work?</h1>
        <div className="faq--content">
          <p>
            National Voices is a very small organisation, and this is a very
            ambitious project, so we are working with others: AYUP are the
            technology company who built this platform, and Mark Brown from
            Social Spider let us benefit from his experience from previous work
            he and others have been involved with, in particular the Hearing
            Voices Network. The social enterprise PPL lent us a project manager,
            Laura, for free. We are grateful for all the support we received.
          </p>
        </div>
        <h1 className="faq--title">Who is funding this work?</h1>
        <div className="faq--content">
          <p>
            Because we needed to act quickly, we couldn’t wait for funding to be
            in place before we proceeded. We were helped by people who
            contributed in kind (see previous question). We also are talking to
            various funders about this work. We will update this answer as and
            when funders decide to support us. You can{" "}
            <a
              href="https://donorbox.org/our-covid-voices"
              target="_blank"
              rel="noopener noreferrer"
            >
              donate here
            </a>{" "}
            if you want to contribute. Please also get in touch if you have any
            ideas for what funders might be interested.
          </p>
        </div>
        <h1 className="faq--title">How long will this project go on for?</h1>
        <div className="faq--content">
          <p>
            This project started in April 2020 and has come to a close in
            October 2020. This enabled us trace experiences over time and also
            to understand what needed to be done as the Covid-19 related
            measures were changed. We believe it was be particularly important
            to understand people’s experiences of life in self-isolation when as
            a country we make decisions about people who might need to isolate
            for longer.
          </p>
        </div>
      </div>
      <ReactSVG
        src={BackgroundBubbles}
        className="faq--background tablet--large-hide"
      />
    </div>
  </Layout>
);

export default withRouter(FAQ);
