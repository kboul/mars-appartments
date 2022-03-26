import React from "react";
import { Modal, ModalBody } from "reactstrap";
import PropTypes from "prop-types";

// .modal-content
//     height: 100%

// .modal-dialog
//     width: 50%
//     height: 100%
//     margin-right: 0px
//     margin-top: 0px
//     margin-bottom: 0px

// .modal-body
//     padding-top: 0rem

// @media only screen and (max-height: 667px)
//     .modal-content
//         height: auto

export default function ModalComp({ modal, toggle, children }) {
  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
}

ModalComp.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
