import React from "react";
import StoryCard from "../../components/HomeComponents/StoryCard";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import vishwanath_img from "../../assets/images/home/vishwanath.png";
import sapnaKumari_img from "../../assets/images/home/SapnaKumari.png";
import banshiYadav_img from "../../assets/images/home/BanshiYadav.png";

const StepsContainer = () => {
  let story_data = [
    {
      name: "Banshi yadav",
      description: "Shawls and hosiery",
      image: vishwanath_img,
      story:
        "I had to work as a job worker for a manufacturer on contract basis due to limited funds but now with the help of Pemant limit, I can buy kuccha material and become manufacturer myself. ",
    },
    {
      name: "Vishwanath Thakur ",
      description: "Owns manufacturing setup",
      image: banshiYadav_img,
      story:
        "I had limited funds to pay my job workers due to ongoing pandemic. Pemant limit can help me to tap-in funds as in when required so that I can pay my job workers on time.",
    },
    {
      name: "Sapna Kumari ",
      description: "Owns Stiching Unit",
      image: sapnaKumari_img,
      story:
        "I have a small unit and don’t have GST or current account but I do need funds to purchase fabric. Pemant Limit can help me to pay my supplier on delivery and get better rates.  I will get 60-90 days to re-pay and dont have to worry for monthly EMIs",
    },
  ];
  return (
    <div className="stories_container">
      <h2 className="heading-primary-2">Stories</h2>
      <Carousel infiniteLoop={true}>
        {story_data.map((user) => {
          return <StoryCard user={user} />;
        })}
      </Carousel>
    </div>
  );
};

export default StepsContainer;
