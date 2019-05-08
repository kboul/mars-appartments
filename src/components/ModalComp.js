import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import '../sass/ModalComp.sass'

const ModalComp = ({ modal, toggle, children }) => {
    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
            size="lg">
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    )
}

ModalComp.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
}

export default ModalComp