import React from "react";
// import StepsCard from "../../components/HomeComponents/StepsCard";
import step1 from "../../assets/images/home/step_1.png";
import step2 from "../../assets/images/home/step_2.png";
import step3 from "../../assets/images/home/step_3.png";
import circle from "../../assets/images/home/sphere.png";
import DownloadLink from "../../components/HomeComponents/QrAndPlaystore";

const StepsContainer = () => {
  return (
    <div className="steps_container">
      <h2 className="heading-primary-2">
        Get your own Pemant Limit in just 3 steps!
      </h2>
      <div className="steps_container_cards">
        <div className="steps_container_card">
          <div className="steps_container_card_content">
            <h5 className="steps_container_card_content_subheading">step 1</h5>
            <h3 className="steps_container_card_content_heading">
              Download the Pemant app
            </h3>
            <div className="steps_container_card_content_step">
              <DownloadLink />
            </div>
          </div>
          <div className="steps_container_card_image">
            <img
              className="steps_container_card_image_circle"
              src={circle}
              alt="step"
            />
            <img
              className="steps_container_card_image_step"
              src={step1}
              alt="step"
            />
          </div>
        </div>
        {/* /////////////////// */}
        <div className="steps_container_card">
          <div className="steps_container_card_content">
            <h5 className="steps_container_card_content_subheading">step 2</h5>
            <h3 className="steps_container_card_content_heading">
              Upload details and documents
            </h3>
            <div className="steps_container_card_content_step">
              <p>
                Upload your GSTIN, PAN and Aadhar details along with photos of
                your business place. You can Watch this video for help.
              </p>
            </div>
          </div>
          <div className="steps_container_card_image">
            <img
              className="steps_container_card_image_circle"
              src={circle}
              alt="step"
            />
            <img
              className="steps_container_card_image_step"
              src={step2}
              alt="step"
            />
          </div>
        </div>
        {/* /////////////////////// */}
        <div className="steps_container_card">
          <div className="steps_container_card_content">
            <h5 className="steps_container_card_content_subheading">step 3</h5>
            <h3 className="steps_container_card_content_heading">
              Get your Pemant Limit
            </h3>
            <div className="steps_container_card_content_step">
              <p>
                Yes, it is that simple. Use your Pemant Limit to grow your
                business!
              </p>
            </div>
          </div>
          <div className="steps_container_card_image">
            <img
              className="steps_container_card_image_circle"
              src={circle}
              alt="step"
            />
            <img
              className="steps_container_card_image_step"
              src={step3}
              alt="step"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepsContainer;
