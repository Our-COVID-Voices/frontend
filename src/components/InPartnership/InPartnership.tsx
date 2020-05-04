import React, { FunctionComponent, Fragment } from "react";
import { cms } from "../../utils/cms";
import ReactSVG from "react-svg";
import cx from "classnames";

import AyupColor from "../../assets/logo/ayup-color.svg";
import PPL from "../../assets/logo/ppl.jpg";
import NationalVoicesColor from "../../assets/logo/national-voices-color.jpg";
import NationalVoices from "../../assets/logo/national-voices.svg";
import Ayup from "../../assets/logo/ayup-white.svg";
import SocialSpider from "../../assets/logo/socialspider-white.svg";
import SocialSpiderColor from "../../assets/logo/socialspider-colour.svg";

import "./InPartnership.scss";

const InPartnership: FunctionComponent<{ color: boolean }> = ({ color }) => (
  <div className="in-partnership--container">
    <Fragment>
      <a href="https://www.nationalvoices.org.uk/" target="__blank">
        <img
          src={color ? NationalVoicesColor : NationalVoices}
          alt="logo for PPL"
          className="in-partnership--nv"
        />
      </a>
      <h2
        className={cx("in-partnership--title", {
          "in-partnership--title--white": !color,
        })}
      >
        {cms("home.subtitle")}
      </h2>
    </Fragment>

    <div className="in-partnership--logo-container">
      <a href="https://ppl.org.uk/" target="__blank">
        <img
          src={PPL}
          alt="logo for PPL"
          className="in-partnership--logo in-partnership--logos"
        />
      </a>
      <a href="https://ayup.agency" target="__blank">
        <ReactSVG
          src={color ? AyupColor : Ayup}
          wrapper="span"
          className="in-partnership--logos"
        />
      </a>
      <a href="http://socialspider.com" target="__blank">
        <ReactSVG
          src={color ? SocialSpiderColor : SocialSpider}
          wrapper="span"
          className="in-partnership--logos"
        />
      </a>
    </div>
  </div>
);

export default InPartnership;
