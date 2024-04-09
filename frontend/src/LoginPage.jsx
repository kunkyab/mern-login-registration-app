import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;
      if (success) {
        console.log("login successful");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("login error", error);
    }

    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <center className="login-container">
        <form onSubmit={handleLoginSubmit}>
          <h2 className="text">LoginPage</h2>
          <input
            type="text"
            name="username"
            className="input"
            onChange={handleLoginChange}
            placeholder="username"
            value={loginData.username}
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleLoginChange}
            placeholder="password"
            className="input"
            value={loginData.password}
            required
          />
          <button type="submit" className="input">
            login
          </button>
          <p className="register-link">
            Not yet registered? <Link to="/register">Register here</Link>
          </p>
        </form>
      </center>
    </>
  );
};

export default LoginPage;
