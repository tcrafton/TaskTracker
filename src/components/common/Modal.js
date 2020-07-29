import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      tabIndex="-1"
      className="modal"
      role="dialog"
      style={{ display: "block" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-dialog"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
          </div>

          <div className="modal-body">
            <div className="content">{props.content}</div>
          </div>

          <div className="modal-footer">
            <div className="actions">{props.actions}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
