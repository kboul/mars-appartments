import React from 'react';

const itemsStyle = {
    paddingTop: '10px',
    paddingLeft: '10px'
}

const Search = ({value, onSearch, itemsDisplayed}) => {
    return (
        <div className="input-group col-md-4 mb-4">
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
}
 
export default Search;