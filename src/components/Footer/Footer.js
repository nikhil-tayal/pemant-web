import React from "react";

import pemantLogo from "../../assets/images/PemantLogo.png";
import contact from "../../assets/images/footer/contact.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import mail from "../../assets/images/footer/email.png";
import youtube from "../../assets/images/footer/youtube.png";
import facebook from "../../assets/images/footer/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_card">
        <img className="logo" src={pemantLogo} alt="Logo" />
        <p>Pemant limit is a simple and digital credit line application.</p>
        <div>
          <a href="/" target="_blank">
            <img src={facebook} alt="ICON" />
          </a>
          <a href="/" target="_blank">
            <img src={linkedin} alt="ICON" />
          </a>
          <a href="/" target="_blank">
            <img src={youtube} alt="ICON" />
          </a>
        </div>
      </div>
      <div className="footer_card">
        <h2 className="heading-size2">Credochain</h2>
        <p>
          If you want to explore our other financial product, please click here.
        </p>
        <a href="/" className="footer_card_button">
          visit <span>&#8599;</span>
        </a>
      </div>
      <div className="footer_card">
        <h2 className="heading-size2">Contact us</h2>
        <div>
          <img src={mail} alt="ICON" /> <p>support@credochain.com</p>
        </div>
        <div>
          <img src={contact} alt="ICON" /> <p>+91 11-41716192</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
