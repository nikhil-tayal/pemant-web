import React from "react";

const ReleaseSoonContent = ({ closeModal }) => {
  return (
    <>
      <div>
        <span onClick={closeModal} className="close">
          &#10006;
        </span>

        <div className="modal_content">
          <h2>This independence day get Azadi from</h2>
          <p>{"Monthly EMIs > High Interest Rates > High Fees"}</p>
        </div>
      </div>

      <div className="independance_day_container_flag">
        <div className="flag_container flag_container_saffron"> </div>
        <div className="flag_container flag_container_white"> </div>
        <div className="flag_container flag_container_green"> </div>
      </div>
    </>
  );
};
export default ReleaseSoonContent;
