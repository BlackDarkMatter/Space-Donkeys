import React from "react";

const Modal = ({ isOpen, onClose, children, modalTitle }) => {
  if (!isOpen) return null;

  return (
    <dialog
      open
      aria-modal={true}
      aria-labelledby="modal-title"
      className="modal-dialog"
    >
      <div className="close-button-container">
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
      <div className="align-on-center">
        <h4 id="modal-title">{modalTitle}</h4>
      </div>
      <div className="modal-content">{children}</div>
    </dialog>
  );
};

export default Modal;
