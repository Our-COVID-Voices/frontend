import React from "react";
import { cms } from "../../utils/cms";

import AyupColor from "../../assets/logo/ayup-color.svg";
import PPL from "../../assets/logo/ppl.jpg";
import NationalVoicesColor from "../../assets/logo/national-voices-color.jpg";
import ReactSVG from "react-svg";

import "./InPartnership.scss";

const InPartnership = () => (
  <div className="in-partnership--container">
    <h2 className="in-partnership--title">{cms("home.subtitle")}</h2>
    <div className="in-partnership--logo-container">
      <a href="https://www.nationalvoices.org.uk/" target="__blank">
        <img
          src={NationalVoicesColor}
          alt="logo for PPL"
          className="in-partnership--logo in-partnership--logos"
        />
      </a>
      <a href="https://ppl.org.uk/" target="__blank">
        <img
          src={PPL}
          alt="logo for PPL"
          className="in-partnership--logo in-partnership--logos"
        />
      </a>
      <a href="https://ayup.agency" target="__blank">
        <ReactSVG
          src={AyupColor}
          wrapper="span"
          className="in-partnership--logos"
        />
      </a>
    </div>
  </div>
);

export default InPartnership;
