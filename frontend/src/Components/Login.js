import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import api from "../http";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., API call, authentication)
    api
      .post("/auth/login", {
        email,
        password,
        role,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        if (role === "mentor") {
          navigate("/mentor");
        } else if (role === "mentee") {
          navigate("/mentee");
        } else if (role === "coordinator") {
          navigate("/coordinator");
        }
      })
      .catch((e) => console.log(e));

    // Clear form inputs after login attempt
    setEmail("");
    setPassword("");
  };

  return (
    <div className="main">
      <img className="logo1" src={logo} alt="Logo" />
      <div className="container1">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit} className="login">
          <div className="email">
            <label>Email:</label>
            <input
              type="email"
              className="ema"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label>Password:</label>
            <input
              type="password"
              className="ema"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <FormControl variant="outlined">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              style={{ width: 200 }}
              onChange={handleChange}
              input={<OutlinedInput label="Role" />}
            >
              <MenuItem value="mentee">Mentee</MenuItem>
              <MenuItem value="mentor">Mentor</MenuItem>
              <MenuItem value="coordinator">Coordinator</MenuItem>
            </Select>
          </FormControl>
          <button id="signin" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
