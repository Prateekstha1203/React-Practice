import React from "react";
import { useFormik } from "formik";

//The useformik hook takes an object as an argument. The argument are initial values, onSubmit and validate
//In initial state the input values are set to empty string and the onSubmit function is called when the form is submitted
// the submit function takes the values as an argument and logs the values to the console
// the validate function thakes the value as an agrument and then validate the form values.
//If the form values are valid the function return an empty object else it returns an object with the error message
//When the function return an object the properties name should be the same as the name attribute of the form input
//The value of the properties should be the error message to be displayed for that input

const YoutubeForm = () => {
  const validate = (values) => {
    // Validate form values here
    // This function should return an object
    // If the returned object is empty, that means the form is valid
    // If the returned object has any properties, that means the form is invalid
    // The properties of the object should be the same as the `name` attribute of the form inputs
    // The values of the properties should be the error message to be displayed for that input
    // Example:
    // return {
    //   name: 'Name is required',
    //   email: 'Email is required',
    //   channel: 'Channel is required',
    // }

    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.channel) {
      errors.channel = "Channel is required";
    }
    return errors;
  };
  const initialValues = { name: "", email: "", channel: "" };
  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("Visited field", formik.touched);
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="border p-4 rounded" onSubmit={formik.handleSubmit}>
        <div className="form-group mb-0">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mb-1"
            id="name"
            name="name"
            placeholder="Enter your name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group mb-0">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control  mb-1"
            id="email"
            name="email"
            placeholder="Enter your email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group mb-0">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            className="form-control  mb-1"
            id="channel"
            name="channel"
            placeholder="Enter your channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
