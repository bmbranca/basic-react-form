import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues((values) => ({
      ...values,
      firstname: e.target.value
    }));
  };

  const handleLastNameInputChange = (e) => {
    setValues((values) => ({
      ...values,
      lastname: e.target.value
    }));
  };

  const handleEmailInputChange = (e) => {
    setValues((values) => ({
      ...values,
      email: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstname && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          onChange={handleLastNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastname && (
          <span id="last-name-error">Please enter a last name</span>
        )}
        <input
          onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
