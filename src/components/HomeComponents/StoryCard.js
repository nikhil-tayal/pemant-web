import React from "react";
const StoryCard = ({ user }) => {
  return (
    <div className="story">
      <div className="story_data">
        <p className="story_data_text">{user.story}</p>
        <div className="story_data_subtext">
          <h4>{user.name}</h4>
          <p>{user.description}</p>
        </div>
      </div>
      <div className="story_img">
        <img src={user.image} alt="userImage" />
      </div>
    </div>
  );
};
export default StoryCard;
