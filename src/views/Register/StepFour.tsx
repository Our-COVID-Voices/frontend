import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";
import Checkbox from "../../components/Checkbox";
import { observer, inject } from "mobx-react";
import RegisterStore from "../../stores/registerStore";

interface IProps {
  registerStore?: RegisterStore;
}

const StepFour: FunctionComponent<IProps> = ({ registerStore }) => {
  if (!registerStore) return null;

  return (
    <Fragment>
      <div className="flex-col--12 register--form">
        <h1 className="register--title">{cms("register.step-4-title")}</h1>
        <p
          className="register--description"
          dangerouslySetInnerHTML={{
            __html: cms("register.step-4-description"),
          }}
        />
      </div>
      <div className="flex-col--4 flex-col--mobile--10 register--checkbox">
        <Checkbox
          id="consent"
          label="I accept the agreement"
          onChange={() => registerStore.toggleConsent()}
          checked={registerStore.consent}
        />
      </div>
    </Fragment>
  );
};

export default inject("registerStore")(observer(StepFour));
