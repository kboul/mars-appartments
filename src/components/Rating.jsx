import React from 'react';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

const Rating = ({ stars }) => {
    return (
        <ReactStars
            count={5}
            value={stars}
            size={24}
            color1="#DCDCDC"
            color2="#000000"
        />
    );
};

Rating.propTypes = {
    // eslint-disable-next-line react/require-default-props
    stars: PropTypes.number
};

export default Rating;
