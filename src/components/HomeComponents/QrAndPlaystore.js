//
//
//
//
//
//
import React from "react";
import plsLink from "../../assets/images/googlePlaystore.png";
import QRcode from "../../assets/images/QrCode.png";

const Links = () => {
  return (
    <div className="links">
      <img className="pls_link" src={plsLink} alt="Playstore link" />
      <p> or </p>
      <img className="qr_link" src={QRcode} alt="QR Code" />
    </div>
  );
};
export default Links;
