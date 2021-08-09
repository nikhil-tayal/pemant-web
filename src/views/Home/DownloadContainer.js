import React from "react";
import get_credit from "../../assets/images/home/get_credit.png";
import zero_setup from "../../assets/images/home/zero_setup.png";
import no_expiry from "../../assets/images/home/no_expiry.png";
import Links from "../../components/HomeComponents/QrAndPlaystore";

const DownloadContainer = () => {
  let Icon = ({ src, text }) => {
    return (
      <div className="download_container_primary_logos_logo">
        <img src={src} alt="logo" className="download_container_logo" />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <>
      <div className="download_container">
        <div className="download_container_primary">
          <h2 className="heading-primary-2">Running business is EASY now</h2>
          <div>
            <div className="download_container_primary_logos">
              <Icon key="1" src={get_credit} text="Get credit any time" />
              <Icon key="2" src={no_expiry} text="No expiry date" />
              <Icon key="3" src={zero_setup} text="Zero setup fees" />
            </div>
          </div>
        </div>

        <div className="download_container_secondary">
          <h2 className="heading-primary-2">Download the app now!</h2>
          <p>
            As a special offer, we will not charge interest (or Fees) if
            repayment is made within 15 days of utilizing the facility. So you
            enjoy a CC Limit without paying any fees or charges.
          </p>
          <Links />
        </div>
      </div>
    </>
  );
};
export default DownloadContainer;
