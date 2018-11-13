import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getUnit } from '../../services/unitService';
import { euro2Bitcoin } from '../utils/euro2Bitcoin';
import Rating from '../Rating/Rating';

import './ModalContent.sass';

const modalImageStyle = {
    height: '50vh', 
    background: 'red'
}

const buttonsStyle = { cursor: 'none' };

class ModalContent extends Component {
    state = { 
        unit: {},
        amenities: [],
        availability: []
    }

    async componentDidMount() {
        const userId = this.props.match.params.id;
        const { data: unit } = await getUnit(userId);
        const amenities = unit.amenities;
        const availability = unit.availability;
        this.setState({ unit, amenities, availability });
        console.log(this.state.unit);
    }

    render() { 
        const { unit, amenities, availability } = this.state;

        return ( 
            <React.Fragment>
                <div 
                    className="row" 
                    style={modalImageStyle}>
                    Image
                </div>
                
                <div className="mt-2 mb-2 d-flex justify-content-between">
                    <div>
                        <b> {unit.name} - {unit.region}</b>
                    </div> 
                    <div>
                        <button
                            type="button" 
                            className="btn btn-secondary special-btn"
                            style={{width: '100px', ...buttonsStyle}}>
                            {euro2Bitcoin(unit.price)}
                        </button>
                    </div>
                </div>
                
                <Rating stars={unit.rating} />

                <div className="mt-2 mb-4">
                    Description: {unit.description}
                </div>

                <div className="mb-4">
                    <b>Amenities: </b> 
                    {amenities.join(', ')}
                </div>

                <div className="row">
                    {availability.map(year => {
                        return (
                            <div 
                                className="col-12 col-sm-3 col-md-3" 
                                key={year}>
                                <button
                                    style={{marginBottom: '8px', ...buttonsStyle}} 
                                    className="btn btn-light btn-block special-btn">
                                    {year}
                                </button>
                            </div>
                        )
                    })}
                </div>

                <button 
                    type="button" 
                    className="btn btn-secondary btn-dark book-btn float-right">
                    Book
                </button>
            </React.Fragment>
        );
    }
}
 
export default withRouter(ModalContent);