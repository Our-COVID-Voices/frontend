import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";
import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import "./WritingGuidance.scss";
import Footer from "../../components/Footer";
import { cms } from "../../utils/cms";
import Button from "../../components/Button";
import { withRouter, RouteComponentProps } from "react-router";

const WritingGuidance: FunctionComponent<RouteComponentProps> = ({
  history,
}) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices | FAQs</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center writing-guidance">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "Writing Guidance", url: "" },
        ]}
      />
      <div className="flex-col--12 writing-guidance--container">
        <h1 className="writing-guidance--title">Welcome</h1>
        <div className="writing-guidance--content">
          <p>
            This is your chance to tell other people what it has been like for
            you to live through Covid-19. We want to particularly hear from
            people who live with ongoing mental or physical health problems or
            with disability. Tell us what made your life easier or more
            difficult, what gave you concern or joy, how you go about your life
            under these extreme conditions, and how you experience your health
            and wellbeing. Maybe also tell us about health and care services you
            now use. Is it working? Are you supported?
          </p>
          <ul>
            Here’s the things to remember when writing about your life:
            <li>
              Please write about what you experience – your routine, your
              thoughts, your feelings. We want to hear about lives, more than
              about opinions.
            </li>
            <li>
              Don’t reveal personal details; either your own or other people’s.
              Avoid naming specific people, organisations or services. Use terms
              like ‘my local hospital’ or ‘a nurse’ rather than specific names.
            </li>
            <li>
              If talking about people you know, please do not include sensitive
              personal information about them. Don’t name them or include
              information that enable others to identify them.
            </li>
            <li>
              Please remember that Our Covid Voices is intended for people of
              all ages, backgrounds and beliefs to read. We won’t publish
              writing that is disrespectful about other people who come in all
              shapes and colours.
            </li>
            <li>
              You can give your real name, but you probably want to avoid
              identifying where you live. A town, city or area is fine but do
              not include details that would allow someone to work out your
              exact location.
            </li>
            <li>
              Remember that your submission will be seen by anyone visiting the
              site; so don’t include anything that you wouldn’t want other
              people to know.
            </li>
            <li>
              You are under no pressure to publish your writing under your own
              name – you can choose a fictional user name and remain anonymous.
            </li>
          </ul>
          <p>
            Once you are happy with your writing, press upload. Please be
            patient when waiting for notification of it being accepted. We need
            to make sure you followed these rules before we can publish your
            writing. We might need to do this with the help of volunteers.
          </p>
          <p>
            Remember: after you have submitted your writing, you will not be
            able to edit it. If there is a problem email
            [email]...@....com[/email]
          </p>
          <p>
            You can request for your contributions to be removed from public
            view on the site at any time, though they will still remain in the
            database until the end of the year. But if other people have read
            what has been published and included it in other publications, we
            cannot undo that.{" "}
          </p>
          <p>
            Any entries that include contents that contravene existing law
            (including the Equality Act 2010) will either be edited or refused
            publication.
          </p>
          <p>Ready?</p>
        </div>
      </div>
    </div>

    <Footer purple={true}>
      <div className="flex-container flex-container--center home--footer">
        <div className="flex-col--8 flex-col--tablet-large--12">
          <h5 className="home--footer--title">{cms("home.footer.title")}</h5>
          <p
            className="home--footer--content"
            dangerouslySetInnerHTML={{ __html: cms("home.footer.content") }}
          ></p>
        </div>
        <div className="flex-col--12 home--footer--button">
          <Button purple={true} text="Donate" />
        </div>
        <div className="flex-col--8 flex-col--tablet-large--12">
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
