import React from "react";
import ReactDom from "react-dom";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer visible modals active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.header}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
          <button onClick={props.onClick} className="ui primary button">{props.action}</button>
          <button onClick={props.onDismiss} className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
