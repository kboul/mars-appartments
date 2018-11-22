import React from 'react';

const success = { boxShadow: '0 0 5px 1px green' };

const Input = ({ name, label, value, error, onChange }) => {
    return ( 
        <div className="form-group">
            <input
                style={
                    !error && 
                    name === "email" && 
                    value !== '' ? success : null
                }
                value={value}
                onChange={onChange}
                type={name=== 'email' ? 'text' : 'password'} 
                className="form-control" 
                id={name} 
                name={name}
                placeholder={label} />
                {error && <div className="alert alert-danger">
                    {error}
                </div>}
        </div>
    );
}
 
export default Input;