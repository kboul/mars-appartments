import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';

class Form extends Component {
  state = {
    data: {},
    errors: []
  };

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, {
      abortEarly: false
    });

    if (!result.error) return null;

    const errors = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // errors should not be null
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const { errors, data } = this.state;
    const newErrors = { ...errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const newData = { ...data };
    newData[input.name] = input.value;
    this.setState({ data: newData, errors: newErrors });
  };

  renderInput(name, label) {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-secondary">
        {label}
      </button>
    );
  }
}

export default Form;
