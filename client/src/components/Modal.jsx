import React from 'react';
import ModalOverlay from "./ModalOverlay"

const Modal = (props) => {
  return (
    <div>
      <ModalOverlay />
      <div className="modal">
        <div className="modal-header-section">
          <div className="modal-exit-button">
            <button style={{background: 'red'}} onClick={props.onClick}>X</button>
          </div>
          <h1 className="modal-title">Sign Up</h1>
        </div>
        <div className="modal-form-container">
          <form className="modal-form">
            <input type="text" className="modal-form-input" placeholder="username" />
            <input type="text" className="modal-form-input" placeholder="email address" />
            <input type="text" className="modal-form-input" placeholder="password" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal;


