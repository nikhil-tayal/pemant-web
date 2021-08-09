import React from "react";

const InfoCard = (image, text) => {
  return (
    <div className="info_card">
      <img className="info_card_img" src={image} alt="Icon"></img>
      <p className="info_card_text">{text}</p>
    </div>
  );
};
export default InfoCard;
