import React from 'react';
import ReactStars from 'react-stars';

const Rating = ({stars}) => {
    return ( 
        <ReactStars
            count={5}
            value={stars}
            size={24}
            color1={'#DCDCDC'}
            color2={'#000000'} />
    );
}
 
export default Rating;