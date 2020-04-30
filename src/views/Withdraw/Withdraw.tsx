import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import ReactSVG from "react-svg";
import Helmet from "react-helmet";
import Modal from "react-modal";

import Layout from "../../components/Layout";
import { cms } from "../../utils/cms";

import "./Withdraw.scss";
import Question from "../../assets/icons/question-circle.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Link from "../../components/Link";
import UserStore from "../../stores/userStore";

interface IProps extends RouteComponentProps {
  userStore?: UserStore;
}

const Widthdraw: FunctionComponent<IProps> = ({ history, userStore }) => {
  if (!userStore) return null;

  return (
    <Layout>
      <Helmet>
        <title>Our COVID Voices | Withdraw</title>
      </Helmet>
      <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify my-account">
        <div className="flex-col--12 my-account--back--container">
          <button onClick={() => history.goBack()} className="my-account--back">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </button>
        </div>

        <div className="flex-col--12">
          <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
            <div className="flex-col--8 flex-col--tablet-large--12">
              <h1 className="withdraw--title">{cms("withdraw.title")}</h1>
              <p className="withdraw--about withdraw--about--tight">
                {cms("withdraw.about")}
              </p>
            </div>
          </div>
          <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
            <div className="flex-col--mobile--11 flex-col--5">
              <div className="withdraw--hint">
                <ReactSVG src={Question} />

                <span>{cms("withdraw.hint")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col--12">
          <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
            <div className="flex-col--8 flex-col--tablet-large--12">
              <h2 className="withdraw--subtitle">
                Permanently delete account and data:
              </h2>
              <p className="withdraw--about">
                If you choose this option, you will delete your account
                information and any submissions you have sent so far. The
                submissions will be deleted and it will not be possible for you
                or anyone else to read them.
              </p>
            </div>

            <div className="flex-col--8 flex-col--tablet-large--11 withdraw--button">
              <Button
                text="Withdraw account and data"
                onClick={() => userStore.setDeleteType("force_delete")}
              />
            </div>
          </div>
        </div>

        <div className="flex-col--12">
          <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
            <div className="flex-col--8 flex-col--tablet-large--12">
              <h2 className="withdraw--subtitle">
                Withdraw from the project, but keep my data:{" "}
              </h2>
              <p className="withdraw--about">
                If you choose this option, you will delete your account
                information from the website. National Voices will not keep a
                record of your contact details and will not be able to contact
                you in the future. Your submission(s) remain public on the
                website, so you and others will be able to read them.
              </p>
            </div>

            <div className="flex-col--8 flex-col--tablet-large--11 withdraw--button">
              <Button
                text="Withdraw and don't delete my data"
                onClick={() => userStore.setDeleteType("soft_delete")}
                purple={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer navy={true}>
        <div className="flex-container flex-container--center flex-container--justify my-account--footer">
          <div className="flex-col--8 flex-col--tablet-large--10 my-account--footer--content">
            <RouterLink to="/privacy-policy">
              <Link
                text="Our Agreement with you"
                href="/privacy-policy"
                size="medium"
              />
            </RouterLink>
            <p className="my-account--footer--about">
              {cms("my-account.footer.about")}
            </p>
          </div>
        </div>
      </Footer>

      <Modal
        isOpen={userStore.modalOpen}
        className="modal"
        overlayClassName="modal--overlay"
      >
        <div className="flex-container flex-container--no-padding flex-container--center flex-container--justify">
          <div className="flex-col--12">
            <p className="withdraw--about">{cms("withdraw.confirmation")}</p>
          </div>
          <div className="flex-col--12">
            <div className="flex-container flex-container--no-padding flex-container--center">
              <button
                className="modal--confirm"
                onClick={() => userStore.deleteAccount()}
              >
                Confirm
              </button>

              <button
                className="modal--cancel"
                onClick={() => userStore.toggleModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default inject("userStore")(withRouter(observer(Widthdraw)));
