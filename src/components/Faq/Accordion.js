import React from "react";
import faq_data from "./faq_data";
import QuestionAnswer from "./QuestionAnswer";
//
//
//
//
//
//
const Accordion = ({ portion }) => {
  let sliced_data = faq_data.slice(0, portion);
  // console.log(faq_data.slice(2,3));
  // console.log(sliced_data);
  // console.log(portion);
  return (
    <div className="accordion">
      {sliced_data.map((data, index) => {
        return (
          <QuestionAnswer
            key={index}
            question={data.question}
            answer={data.answer}
          />
        );
      })}
    </div>
  );
};
export default Accordion;

// const Faq = () => {
//
//   return (
//     <div className="faq ">
//       <h1 className="heading-primary-2">FAQs</h1>
//       {questions.map((ques, index) => {
//         return (
//           <div key={index} class="faq_question">
//             {ques}
//             <p>+</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Faq;
