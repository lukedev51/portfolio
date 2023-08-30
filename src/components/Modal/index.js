import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const Modal = ({ isShowing, hide, title, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <Wrapper>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{title}</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{children}</div>
              </div>
            </div>
          </div>
        </Wrapper>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Modal;
