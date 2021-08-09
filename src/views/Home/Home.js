import React from "react";
import HeadContainer from "./HeadContainer";
import InfoContainer from "./InfoContainer";
import StepsContainer from "./StepsContainer";
import DownloadContainer from "./DownloadContainer";
import QuestionsContainer from "./QuestionsContainer";
import StoriesContainer from "./StoriesContainer";

const Home = () => {
  return (
    <div className="home_wrapper">
      <HeadContainer />
      <InfoContainer />
      <StepsContainer />
      <DownloadContainer />
      <StoriesContainer />
      <QuestionsContainer />
    </div>
  );
};
export default Home;
