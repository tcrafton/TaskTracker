import React from "react";
import { Field, reduxForm } from "redux-form";

class TaskForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, inputClass, meta }) => {
    const errorClass = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorClass}>
        <div className="row" style={{ paddingBottom: "1em" }}>
          <div className="col-md-2">
            <label>{label}</label>
          </div>
          <div className={inputClass}>
            <input {...input} autoComplete="off" className="form-control" />
          </div>
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  renderTextArea = ({ input, label, inputClass, meta }) => {
    const errorClass = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorClass}>
        <div className="row" style={{ paddingBottom: "1em" }}>
          <div className="col-md-2">
            <label>{label}</label>
          </div>
          <div className={inputClass}>
            <textarea {...input} autoComplete="off" className="form-control" />
          </div>
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  renderSelect = ({
    input,
    label,
    inputClass,
    inputOptions,
    selectName,
    selectValue,
    inputKey,
    meta,
  }) => {
    const errorClass = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorClass}>
        <div className="row" style={{ paddingBottom: "1em" }}>
          <div className="col-md-2">
            <label>{label}</label>
          </div>
          <div className={inputClass}>
            <select {...input} autoComplete="off" className="form-control">
              <option value='' key={selectValue}>
              </option>
              {inputOptions.map((o) => {
                return (
                  <option value={o[inputKey]} key={o[inputKey]}>
                    {o[selectName]}
                  </option>
                );
              })}
            </select>
          </div>
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="form-group"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="TITLE"
          component={this.renderInput}
          label="Title"
          inputClass="col-md-5"
        />

        <Field
          name="DESCRIPTION"
          component={this.renderTextArea}
          label="Description"
          inputClass="col-md-8"
        />

        <Field
          name="REQUESTED_BY"
          value={
            this.props.initialValues
              ? this.props.initialValues.REQUESTED_BY
              : ""
          }
          component={this.renderSelect}
          label="Requested By"
          inputClass="col-md-4"
          inputOptions={this.props.users}
          selectName="FULL_NAME"
          selectValue={
            this.props.initialValues
              ? this.props.initialValues.REQUESTED_BY
              : ""
          }
          inputKey="EMPLOYEEID"
        />

        <div className="row">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "taskForm",
  enableReinitialize: true,
})(TaskForm);
