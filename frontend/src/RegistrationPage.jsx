import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistration = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        registrationData
      );
      console.log(response.data);
    } catch (error) {
      console.log("login error", error);
    }

    setRegistrationData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <center className="login-container">
        <h1>Registration form</h1>
        <form onSubmit={handleRegistrationSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="input"
            required
            value={registrationData.username}
            onChange={handleRegistration}
          />
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            required
            value={registrationData.password}
            onChange={handleRegistration}
          />
          <button type="submit" className="input">
            Register
          </button>
          <p className="register-link">
            already registered? <Link to="/login">Login here</Link>
          </p>
        </form>
      </center>
    </>
  );
};

export default RegistrationPage;
