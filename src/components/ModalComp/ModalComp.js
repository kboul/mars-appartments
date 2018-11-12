import React from 'react'
import { Modal, ModalBody } from 'reactstrap';

const ModalComp = ({modal, toggle, children}) => {
	return ( 
		<Modal 
			isOpen={modal} 
			toggle={toggle}
			size="lg">
			<ModalBody>{children}</ModalBody>
        </Modal>
	);
}

export default ModalComp;