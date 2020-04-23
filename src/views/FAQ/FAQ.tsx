import React, { FunctionComponent } from "react";
import Layout from "../../components/Layout";
import Helmet from "react-helmet";

import "./FAQ.scss";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import { cms } from "../../utils/cms";
import Button from "../../components/Button";
import { withRouter, RouteComponentProps } from "react-router";

const FAQ: FunctionComponent<RouteComponentProps> = ({ history }) => (
  <Layout>
    <Helmet>
      <title>Our COVID Voices | FAQs</title>
    </Helmet>
    <div className="flex-container flex-container--no-padding flex-container--justify flex-container--center faq">
      <Breadcrumb
        crumbs={[
          { text: "Home", url: "/" },
          { text: "FAQ's", url: "" },
        ]}
      />
      <div className="flex-col--12 faq--container">
        <h1 className="faq--title">What is expected of me if I sign up? </h1>
        <div className="faq--content">
          <p>
            Our Covid Voices is about capturing a snapshot of what it is like to
            live in the UK during the 2020 pandemic. If you sign up you will be
            able to share up to 700 words of writing about your experience. You
            will be writing about what the days are like for you during this
            unusual period; sharing what makes the days better or worse; writing
            about your worries and comforts and anything else that happens to
            you.
          </p>
          <p>
            You can write as many times as you like. Through your experience and
            hundreds of others we will have a snapshot of what it is like to
            live in the UK under the Covid-19 pandemic circumstances.
          </p>
        </div>

        <h1 className="faq--title">How will I know what to write about?</h1>
        <div className="faq--content">
          <p>
            We want you to be honest, to write about what matters to you and
            about how the changes due to the pandemic have affected your health
            and wellbeing. We want people to get a window into what makes life
            harder and what makes life easier, more pleasurable or more
            rewarding. It is an experience you will be sharing with anyone who
            wants to read about it. We are also interested in hearing about your
            experiences of using services. Were any of the services you normally
            use closed? Or changed? Do you get the care and support you need?
            How does it work? This insight will be very helpful for us as we
            talk to the people who design and deliver services.
          </p>
        </div>

        <h1 className="faq--title">
          What will happen to each of my experiences once I upload them?
        </h1>
        <div className="faq--content">
          <p>
            Each time you record an experience and upload it, there will be a
            delay before it is published on the site. This is because we will
            check each submission to make sure that it does not include any of
            the things we ask you not to include (see Writing Guidelines). We
            will also categorise your experience based on its content. We are
            categorising entries for two reasons. Firstly, once submissions are
            published, it is easy for readers to find topics they are interested
            in. Secondly, National Voices will identify trends and common
            issues, in order to influence decision makers and help them
            understand the impact of policies on real people.
          </p>
        </div>

        <h1 className="faq--title">Who are National Voices?</h1>
        <div className="faq--content">
          <p>
            National Voices are the umbrella organisation for charities in
            health in care. Our ca 150 charity members work with people living
            with one or more long term condition, and also support people with
            specific needs, such as the homeless or people who use British SIgn
            Language to communicate. Our members work with and for people living
            with physical and mental health issues and disability means we are
            in touch with millions of people’s experiences.
          </p>
        </div>

        <h1 className="faq--title">Who has come together to do this work?</h1>
        <div className="faq--content">
          <p>
            National Voices is a very small organisation, and this is a very
            ambitious project, so we are working with others: AYUP are the
            technology company who built this platform, and Mark Brown from
            Social Spider let us benefit from his experience from previous work
            he and others have been involved with, in particular the hearing
            voices network. The social enterprise PPL lent us a project manager,
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
            when funders decide to support us. You can donate here if you want
            to contribute. Please also get in touch if you have any ideas for
            what funders might be interested.
          </p>
        </div>
        <h1 className="faq--title">How long will this project go on for?</h1>
        <div className="faq--content">
          <p>
            This project is conceived to last at least 6 months. This will
            enable us trace experiences over) time and also to understand what
            needs to be done as and when the lock down is (partially) lifted. We
            believe it will be particularly important to understand people’s
            experiences of life in self isolation as we make decisions about
            people who might need to isolate for longer.
          </p>
        </div>

        <h1 className="faq--title">
          Can I get involved beyond telling my story?
        </h1>
        <div className="faq--content">
          <p>
            We don’t know how big this project will grow to be, and there might
            be opportunities to volunteer, especially if you can help us with
            marketing, analysis or curating writing. For now, it will be great
            if you consent to us contacting you again in the near future,
            because that way we can follow up with further questions based on
            specific experiences and so on. You can also talk to your friends
            and family about contributing their own writing. And make noise on
            social media.
          </p>
        </div>

        <h1 className="faq--title">Who can take part?</h1>
        <div className="faq--content">
          <p>
            Anyone who want to tell their story of life under Covid-19 can take
            part. But we are particularly keen to hear from people who live with
            ongoing physical or mental health issues or disability, or who look
            after people who have these issues. This is because we believe that
            particular attention needs to be given to those with ongoing health
            and care needs to make sure that we make good decisions about
            services, now and in the future.
          </p>
        </div>
      </div>
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
            text="Would you like to take part and share your experiences?"
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

export default withRouter(FAQ);
