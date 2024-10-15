import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import loginData from "../data/loginData.json";
// import './Login.css';  // Optional: Style the login form
import '../Styles/layout.css';
import '../Styles/colors.css';
import '../Styles/typography.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const history = useHistory();
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === loginData.username && password === loginData.password) {
        navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> 
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
