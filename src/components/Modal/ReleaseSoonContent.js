import React from "react";
import img_1 from "../../assets/images/modal/modalImg1.png";
import img_2 from "../../assets/images/modal/modalImg2.png";
const IndependenceDayContent = ({ closeModal }) => {
  return (
    <>
      <div>
        <span onClick={closeModal} className="close">
          &#10006;
        </span>

        <div className="release_modal_content"></div>
        <div className="release_modal_content_images">
          <img className="img_2" src={img_2} alt="img" />
          <img className="img_1" src={img_1} alt="img" />
        </div>
        <div className="release_modal_content_data">
          <h2 className="release_modal_content_heading">
            We are releasing our app soon!
          </h2>
          <p className="release_modal_content_text">
            Please share your mobile number with us and we will notify you when
            the app is released.
          </p>
          <input
            className="release_modal_content_input"
            placeholder="MOBILE NUMBER"
          ></input>
        </div>
      </div>
    </>
  );
};
export default IndependenceDayContent;
