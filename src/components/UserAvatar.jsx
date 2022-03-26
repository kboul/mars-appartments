import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AvatarName = styled.div`
  padding-top: 5px;
`;

export default function UserAvatar({ image, name }) {
  return (
    <div className="media">
      <img width="32" height="32" src={image} className="mr-2" alt={image} />
      <AvatarName className="media-body">{name}</AvatarName>
    </div>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
