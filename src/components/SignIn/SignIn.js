import React from 'react';
import Joi from 'joi-browser';
import Form from '../../common/Form';
import authService from '../../services/authService';

import './SignIn.sass';

class SignIn extends Form {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        email: Joi
            .string()
            .email({ minDomainAtoms: 2 })
            .required()
            .label("Colonist ID"),
        password: Joi
            .string()
            .required()
            .label("Password")
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await authService.login(data.email, data.password);
            // land to browse view if successful
            this.props.history.push('/browse');
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() { 
        return ( 
            <div className="container authenticate-container">
                <form 
                    className="form-authenticate" 
                    noValidate
                    onSubmit={this.handleSubmit}>
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="mb-4">
                                <b>Blueground on Mars</b>
                            </div>
                            {this.renderInput("email", "Colonist ID")}
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