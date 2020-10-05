import React, { FunctionComponent, Fragment } from "react";

const Intro: FunctionComponent = () => (
  <Fragment>
    <h1 className="register--title">
      Submissions are now closed -{" "}
      <a
        href="https://mailchi.mp/cbb4e70e6e65/e56e9ah8zm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to download the report.
      </a>
    </h1>
    {/* <div className="flex-col--12">
      <h1 className="register--title">{cms("register.title")}</h1>
      <p
        className="register--description"
        dangerouslySetInnerHTML={{ __html: cms("register.description") }}
      />
    </div>

    <div className="flex-col--12">
      <h2 className="register--subtitle">{cms("register.step-title")}</h2>
      <p className="register--step-description">
        {cms("register.step-description")}
      </p>
    </div> */}
  </Fragment>
);

export default Intro;
