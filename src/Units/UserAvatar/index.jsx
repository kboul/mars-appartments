import React from 'react';
import PropTypes from 'prop-types';
import { avatarName } from './index.module.sass';

const UserAvatar = ({ image, name }) => {
  return (
    <div className="media">
      <img width="32" height="32" src={image} className="mr-2" alt={image} />
      <div className={`media-body ${avatarName}`}>{name}</div>
    </div>
  );
};

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default UserAvatar;
