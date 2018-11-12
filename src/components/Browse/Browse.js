import React, { Component } from 'react'
import { getUnits } from '../../services/unitsService';
import MarsCircleHeader from '../MarsCircleHeader/MarsCircleHeader';

const cardStyle = { width: '18rem', border: '0px' };
const cardBodyStyle = { padding: '0' };

class Browse extends Component {
    state = {
        units: []
    }

    async componentDidMount() {
        const { data: units } = await getUnits();
        this.setState({ units: units.data });
        console.log(this.state.units);
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="d-flex justify-content-between m-2">
                    <div>
                        <MarsCircleHeader 
                            background="white" 
                            color="black" />
                    </div>
                    <div>
                        User name
                    </div>
                </div>
                <div className="card-deck d-flex justify-content-center mt-4">
                    {this.state.units.map(({id, name, description, cancellation, price}) => {
                        return (
                            <div key={id}>
                                <div 
                                    className="card mb-4" 
                                    style={cardStyle}>
                                <img 
                                    className="card-img-top" 
                                    src="https://via.placeholder.com/1000x600"
                                    alt="Card image cap" />
                                <div 
                                    className="card-body" 
                                    style={cardBodyStyle}>
                                       <b>{name}</b> 
                                    <div className="card-text">
                                        {description.substring(0,30)}
                                    </div>
                                    <div>{cancellation}</div> 
                                    <div className="card-text">
                                       <b>{price} Euro</b>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 d-none d-sm-block d-md-none"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
 
export default Browse;