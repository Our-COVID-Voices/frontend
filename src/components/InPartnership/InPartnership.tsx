import React, { FunctionComponent } from "react";
import { cms } from "../../utils/cms";

import AyupColor from "../../assets/logo/ayup-color.svg";
import PPL from "../../assets/logo/ppl.jpg";
import NationalVoicesColor from "../../assets/logo/national-voices-color.jpg";
import NationalVoices from "../../assets/logo/national-voices.svg";
import Ayup from "../../assets/logo/ayup-white.svg";
import ReactSVG from "react-svg";

import "./InPartnership.scss";

const InPartnership: FunctionComponent<{ color: boolean }> = ({ color }) => (
  <div className="in-partnership--container">
    {color && <h2 className="in-partnership--title">{cms("home.subtitle")}</h2>}
    <div className="in-partnership--logo-container">
      <a href="https://www.nationalvoices.org.uk/" target="__blank">
        <img
          src={color ? NationalVoicesColor : NationalVoices}
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
          src={color ? AyupColor : Ayup}
          wrapper="span"
          className="in-partnership--logos"
        />
      </a>
    </div>
  </div>
);

export default InPartnership;
