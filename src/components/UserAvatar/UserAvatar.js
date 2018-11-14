import React from 'react';

const mediaBodyStyle = { 
    paddingTop: '5px'
};

const UserAvatar = ({image, name}) => {
    return ( 
        <div className="media">
            <img 
                width='32'
                height='32'
                src={image} 
                className="mr-2" 
                alt={image} />
                <div 
                    className="media-body" 
                    style={mediaBodyStyle}>
                    {name}
                </div>
        </div>
     );
}
 
export default UserAvatar;