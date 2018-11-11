import React from 'react';
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
 
export default MarsCircleHeader;