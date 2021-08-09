import React from "react";
import Accordion from "../../components/Faq/Accordion";
const QuestionsContainer = () => {
  return (
    <div className="questions_container">
      <h2 className="heading-primary-2">Have any questions?</h2>
      <Accordion portion={4} />
      <a href="/faq">
        view more <span>&#8702;</span>
      </a>
    </div>
  );
};
export default QuestionsContainer;
