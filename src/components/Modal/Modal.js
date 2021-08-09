import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import IndependenceDayContent from "./IndependenceDayContent";
import ReleaseSoonContent from "./ReleaseSoonContent";

ReactModal.setAppElement("#root");
const Modal = ({ isOpen }) => {
  let [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    setTimeout(() => openModal(), 1500);
  }, []);

  return (
    <ReactModal
      isOpen={modalIsOpen}
      // className="modal"
      className="release_modal"
      overlayClassName="modal_overlay"
      onRequestClose={closeModal}
    >
      {/* <IndependenceDayContent closeModal={closeModal} /> */}
      <ReleaseSoonContent closeModal={closeModal} />
    </ReactModal>
  );
};
export default Modal;
