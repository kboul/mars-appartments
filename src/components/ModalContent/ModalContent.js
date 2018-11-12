import React, { Component } from 'react'
import { getUnit } from '../../services/unitService';
import { withRouter } from 'react-router-dom'

class ModalContent extends Component {
    state = { 
        unit: {}
    }

    async componentDidMount() {
        const userId = this.props.match.params.id;
        const user = await getUnit(userId);
        console.log(user);
    }

    render() { 
        return ( 
            <div>Unit</div>
        );
    }
}
 
export default withRouter(ModalContent);