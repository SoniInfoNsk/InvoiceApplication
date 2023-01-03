import ReactDOM from "react-dom";
import React from "react";
import ReviewModal from "./ReviewModal";


const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ReviewModal onSubmit={props.onSubmit} />,
        document.getElementById("root")
      )}
    </React.Fragment>
  );
};
export default Modal;
