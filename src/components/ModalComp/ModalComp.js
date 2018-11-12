import React from 'react'
import { Modal, ModalBody } from 'reactstrap';
import './ModalComp.sass';

const modalStyle = { 
    width: '50%',
    height: '100%', 
    marginRight: '0px',
    marginTop: '0px',
    marginBottom: '0px'
};

const ModalComp = ({modal, toggle, children}) => {
	return ( 
        <Modal 
            style={modalStyle}
			isOpen={modal} 
            toggle={toggle}
			size="lg">
			<ModalBody >{children}</ModalBody>
        </Modal>
	);
}

export default ModalComp;