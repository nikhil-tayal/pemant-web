import React from "react";
import Accordion from "../../components/Faq/Accordion";

const Faq = () => {
  return (
    <div className="faq ">
      <h1 className="heading-primary-2">FAQs</h1>

      <Accordion portion={14} />
    </div>
  );
};
export default Faq;
