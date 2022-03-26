import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Circle = styled.span`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
  padding: 5px;
`;

export default function MarsCircleHeader({ background, color }) {
  const style = { background, color };

  return (
    <b>
      Blueground on&nbsp;
      <Circle style={style}>Mars</Circle>
    </b>
  );
}

MarsCircleHeader.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
