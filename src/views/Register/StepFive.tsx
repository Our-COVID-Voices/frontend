import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";
import Checkbox from "../../components/Checkbox";
import { observer, inject } from "mobx-react";
import RegisterStore from "../../stores/registerStore";

interface IProps {
  registerStore?: RegisterStore;
}

const StepFive: FunctionComponent<IProps> = ({ registerStore }) => {
  if (!registerStore) return null;

  return (
    <Fragment>
      <div className="flex-col--12 register--form">
        <h1 className="register--title">{cms("register.step-5-title")}</h1>
        <p
          className="register--description"
          dangerouslySetInnerHTML={{ __html: cms("privacy.content") }}
        />
      </div>
      <div className="flex-col--8 flex-col--mobile--12 register--consent">
        <Checkbox
          label="I agree to be contacted by National Voices during the next 3 years, so I can decide whether to take part in further conversations or similar projects."
          checked={
            registerStore.canContact === undefined
              ? false
              : registerStore.canContact
          }
          id="consent-1"
          onChange={() => registerStore.handleContact(true)}
        />
        <Checkbox
          label="I do not agree to be contacted by National Voices. "
          checked={
            registerStore.canContact === undefined
              ? false
              : !registerStore.canContact
          }
          id="consent-2"
          onChange={() => registerStore.handleContact(false)}
        />
      </div>
    </Fragment>
  );
};

export default inject("registerStore")(observer(StepFive));
