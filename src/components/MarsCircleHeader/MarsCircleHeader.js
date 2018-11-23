import React from 'react';
import PropTypes from 'prop-types'; 
import './MarsCircleHeader.sass';

const MarsCircleHeader = ({background, color}) => {
    return ( 
        <b>Blueground on&nbsp;
            <span 
                className="circle"
                style={{ 
                    background: background,
                    color: color
                }}>
                Mars
            </span>
        </b>
    );
}

MarsCircleHeader.propTypes = {
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
 
export default MarsCircleHeader;