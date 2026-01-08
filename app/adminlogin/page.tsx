'use client'
//username and password are entered
//check if they're correct
//error if either isn't correct
//show dashboard

//Boundary object for admin login
import React from "react";
import "./admin_login_page.css";

export default function Home() {
  //setting the state of username and password to be blank
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  //PLACEHOLDER no implementation yet
  const handleAdminLogin = () => {
    console.log("Login admin:", { username, password });
  };

  return (
    <div className="page">
      <h1 className="title">ShopComp.online</h1>
      <p className="subtitle">Shop. Compare. Save.</p>

      <div className="form-container">
        <input
          type="text"
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleAdminLogin}>
          Login as Admin
        </button>
      </div>

      <div className="links">
        <a href="/">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}
