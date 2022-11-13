import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './index.sass';

const ModalComp = ({ modal, toggle, children }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

ModalComp.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ModalComp;
