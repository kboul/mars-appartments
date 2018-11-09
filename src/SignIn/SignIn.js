import React from 'react';
import Joi from 'joi-browser';
import Form from '../common/Form';

import './SignIn.sass';

class SignIn extends Form {
    state = {
        data: {
            colonistId: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        colonistId: Joi
            .string()
            .email({ minDomainAtoms: 2 })
            .required()
            .label("Colonist ID"),
        password: Joi
            .number()
            .required()
            .label("Password")
    }

    render() { 
        return ( 
            <div className="container authenticate-container">
                <form className="form-authenticate" noValidate>
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="mb-4">
                                <b>Blueground on Mars</b>
                            </div>
                            {this.renderInput("colonistId", "Colonist ID")}
                            {this.renderInput("password", "Password")}
                            <div className="float-right">
                                {this.renderButton("Sign In")}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignIn;