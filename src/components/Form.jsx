import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    const key = target.getAttribute("name");
    setState((prev) => ({
      ...prev,
      [key]: target.value
    }));
  };

  const isEmpty = () => {
    for (let key in state) {
      if (state[key] === "") {
        return true;
      }
    }
    return false;
  };

  const isAlphaNumeric = () => {
    let letters = /^[0-9a-zA-Z ]+$/;
    return letters.test(state.name);
  };

  const isValidEmail = () => {
    return state.email.includes("@");
  };

  const hasGender = () => {
    return (
      state.gender === "male" ||
      state.gender === "female" ||
      state.gender === "other"
    );
  };

  const isValidPhoneNumber = () => {
    let numbers = /^[0-9]+$/;
    return numbers.test(state.phoneNumber);
  };

  const isValidPassword = () => {
    return state.password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty()) {
      setError("All fields are mandatory");
    } else if (!isAlphaNumeric()) {
      setError("Name is not alphanumeric");
    } else if (!hasGender()) {
      setError("Please identify as male, female or others");
    } else if (!isValidEmail()) {
      setError("Email must contain @");
    } else if (!isValidPhoneNumber()) {
      setError("Phone Number must contain only numbers");
    } else if (!isValidPassword()) {
      setError("Password must contain atleast 6 letters");
    } else {
      setMessage(`Hello ${state.email.split("@")[0]}`);
      setError(null);
    }
  };

  return (
    <div>
      <h1>{error ? error : message}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={state.name}
            data-testid="name"
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={state.email}
            data-testid="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            id="gender"
            data-testid="gender"
            value={state.gender}
            onChange={handleChange}
          >
            <option value="male" selected={state.gender === "male"}>
              Male
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Phone:
          <input
            name="phoneNumber"
            type="text"
            value={state.phoneNumber}
            data-testid="phoneNumber"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            value={state.password}
            data-testid="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <br />
        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
