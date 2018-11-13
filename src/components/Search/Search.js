import React from 'react';

const Search = ({value, onSearch}) => {
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
        </div>
    );
}
 
export default Search;