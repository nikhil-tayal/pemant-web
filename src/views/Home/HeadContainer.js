import React from "react";
import headImage from "../../assets/images/headImage.png";
import cell_1 from "../../assets/images/home/cell_1.png";
import cell_2 from "../../assets/images/home/cell_2.png";

import Links from "../../components/HomeComponents/QrAndPlaystore";

const HeadContainer = () => {
  return (
    <div className="head_container">
      <div className="head_container_texts">
        <h1 className="head_container_texts_heading heading-primary">
          Aapki Pemant limit ab aapke phone me!
        </h1>
        <p className="head_container_texts_subheading paragraph">
          Get your pemant limit in just one tap on your mobile. Download the app
          now!
        </p>
        <Links />
        <div className="video_link">
          <p className="para paragraph">
            <a href="/"> watch </a> a short video about Pemant Limit
          </p>
        </div>
      </div>

      <div className="image_container">
        <img
          className="image_container_image image_1"
          src={cell_1}
          alt="cell"
        />
        <img
          className="image_container_image image_2"
          src={cell_2}
          alt="cell"
        />
        <img
          className="image_container_image image_3"
          src={headImage}
          alt="user img"
        />
      </div>
    </div>
  );
};
export default HeadContainer;
