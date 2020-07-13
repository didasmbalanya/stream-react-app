import React from "react";
import { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    return null;
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched && "error"}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (values) => {
    this.props.onSubmit(values);
  };

  render() {
    const { inputValues, handleSubmit } = this.props;
    return (
      <div>
        <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
            defaultValue={inputValues && inputValues.title}
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
            value={inputValues && inputValues.description}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "title required";
  }
  if (!formValues.description) {
    errors.description = "description required";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

export default formWrapped;
