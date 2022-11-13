import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

const MarsCircleHeader = ({ background, color }) => {
  const style = {
    background,
    color
  };
  return (
    <b>
      Blueground on&nbsp;
      <span className="circle" style={style}>
        Mars
      </span>
    </b>
  );
};

MarsCircleHeader.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default MarsCircleHeader;
