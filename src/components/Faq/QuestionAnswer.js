// import React, { useState, useRef } from "react";
import React, { useState } from "react";

const QuestionAnswer = ({ question, answer }) => {
  const [setActive, setActiveState] = useState("de-active");
  // const [setHeight, setHeightState] = useState("0px");

  // const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "active" ? "de-active" : "active");
    // setHeightState(
    //   setActive === "de-active" ? "0px" : `${content.current.scrollHeight}px`
    // );
  }
  return (
    <div className="question_answer">
      <div>
        <div
          className="faq_question .heading-secondary"
          onClick={() => {
            toggleAccordion();
          }}
        >
          <p>{question}</p>
          <p className="sign">{setActive === "active" ? "-" : "+"}</p>
        </div>
        <div
          className={"faq_answer .paragraph " + setActive}
          // style={{ maxHeight: `${setHeight}` }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};
export default QuestionAnswer;
