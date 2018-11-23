import React from 'react';
import PropTypes from 'prop-types'; 

const itemsStyle = {
    paddingTop: '10px',
    paddingLeft: '10px'
};

const searchBarStyle = { marginLeft: '-14px' };

const Search = ({value, onSearch, itemsDisplayed}) => {
    return (
        <div className="input-group col-md-4 mb-4" style={searchBarStyle}>
            <div className="input-group-prepend">
                <span className="input-group-text fa fa-search py-2"></span>
            </div>
            <input 
                type="text" 
                value={value}
                className="form-control" 
                placeholder="Search..." 
                onChange={onSearch} />
            <div style={itemsStyle}>
                {`${itemsDisplayed} items`}
            </div>
        </div>
    );
};

Search.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func,
    itemsDisplayed: PropTypes.number
};
 
export default Search;