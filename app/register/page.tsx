'use client'
//enter username and password + reenter password
//error if the passwords don't match
//check against the database if the username is available
//error if its taken
//log the user in with their new account

//Boundary object for register

//used chatGPT to create this with the prompt with an image of our register shopper : "could you make this into some react code"
import React from "react";
import "./register_page.css";

export default function RegisterPage() {
  //setting the state of username and password to be blank
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  //PLACEHOLDER no implementation yet
  const handleRegister = () => {
    console.log("Register shopper:", { username, password });
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

        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
      </div>

      <div className="links">
        <a href="/adminlogin">Login as Admin</a>
        <a href="/">Login</a>
      </div>
    </div>
  );
}

