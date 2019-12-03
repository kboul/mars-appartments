import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../common/Form';
import { login, isUserLoggedIn } from '../services/authService';
import MarsCircleHeader from './MarsCircleHeader';
import '../sass/SignIn.sass';

class SignIn extends Form {
    state = {
        data: {
            email: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        email: Joi.string()
            .email({ minDomainAtoms: 2 })
            .required()
            .regex(/^[\w-]{2,8}@.*$/, '2-8 min chars before @')
            .regex(/(?:(?:19|20)[0-9]{2})/, 'year of birth in 4 digits')
            .regex(
                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                '2 letter country code after .'
            )
            .label('Email'),
        password: Joi.string()
            .required()
            .label('Password')
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await login(data.email, data.password);
            // land to units view if successful
            this.props.history.push('/units');
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const { errors } = this.state;
                const newErrors = { ...errors };
                newErrors.email = ex.response.data;
                this.setState({ errors: newErrors });
            }
        }
    };

    render() {
        // if user is logged in & tries to hit / on browser redirect him to /units
        if (isUserLoggedIn()) return <Redirect to="/units" />;

        return (
            <div className="container authenticate-container">
                <form
                    className="form-authenticate"
                    noValidate
                    onSubmit={this.handleSubmit}>
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="mb-4">
                                <MarsCircleHeader
                                    background="black"
                                    color="white"
                                />
                            </div>
                            {this.renderInput('email', 'Email')}
                            {this.renderInput('password', 'Password')}
                            <div className="float-right">
                                {this.renderButton('Sign In')}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
