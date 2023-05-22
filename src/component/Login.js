import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    if (userName === null || password === null) {
      alert("Invalid Login credentials");
    } else {
      const user = {
        username: userName,
        password: password,
      };
      const response = await axios.post("http://localhost:8080/login", user);
      const data = response.data;
      try {
        alert(data);
        const authToken = data.substring(
          data.indexOf("Bearer"),
          data.indexOf("}")
        );
        localStorage.setItem("authToken", authToken);
      } catch (error) {
        console.error("Error parsing response data:", error);
      }
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="username"
        value={userName}
        onChange={handleUserName}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePassword}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
