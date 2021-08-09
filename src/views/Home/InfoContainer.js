import React from "react";
// import InfoCard from "../../components/HomeComponents/InfoCard";
import info_1 from "../../assets/images/home/info_1.png";
import info_2 from "../../assets/images/home/info_2.png";
import info_3 from "../../assets/images/home/info_3.png";

const HeadContainer = () => {
  return (
    <div className="info_container">
      <h2 className="heading-primary-2">What is Pemant Limit?</h2>
      {/* <InfoCard key="1" img={info_1} text={"demo"} />
      <InfoCard key="2" img={info_2} text={"demo"} />
      <InfoCard key="3" img={info_3} text={"demo"} /> */}

      <div className="info_container_card">
        <img className="info_container_card_img" src={info_1} alt="Icon"></img>
        <p className="info_container_card_text">
          Pemant Limit is a digital cash credit facility for your business -
          without any processing or annual fees{" "}
        </p>
      </div>
      <div className="info_container_card">
        <img className="info_container_card_img" src={info_2} alt="Icon"></img>
        <p className="info_container_card_text">
          You can use Pemant Limit to pay your suppliers on the basis of invoice
          issued by them
        </p>
      </div>
      <div className="info_container_card">
        <img className="info_container_card_img" src={info_3} alt="Icon"></img>
        <p className="info_container_card_text">
          You can also transfer Funds to your bank account against customer
          invoices without paying any additional fees
        </p>
      </div>
    </div>
  );
};
export default HeadContainer;
