import React from "react";
import "../../Styles/Modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <h1>{this.props.titleTxt}</h1>
        <img src={this.props.imgUrl} alt="The Rock" />
        <button className="modal-btn" onClick={this.props.hideModal}>
          {this.props.btnText}
        </button>
      </div>
    );
  }
}

export default Modal;
