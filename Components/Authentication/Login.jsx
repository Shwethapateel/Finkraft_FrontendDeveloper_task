import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const users = [
    { username: "Admin", password: "Admin@123", active_module: "admin" },
    { username: "User", password: "User@123", active_module: "user" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setPasswordError("");

    if (!username) {
      setNameError("Username is required");
    }

    if (!password) {
      setPasswordError("Password is required");
    }

    if (username && password) {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        localStorage.setItem("role", user.active_module);
        toast.success("Successfully Login", {
          position: "top-center",
          style: { backgroundColor: "black", color: "white" },
        });
        navigate("/home");
      } else {
        setNameError("Invalid username");
        setPasswordError("Invalid Password");
        toast.error("Login Failed", {
          position: "top-center",
          style: { backgroundColor: "black", color: "white" },
        });
      }
    }
  };

  return (
    <div id="login">
      <form action="" id="loginform" onSubmit={handleSubmit}>
        <div id="loginbody1">
          <div id="loginbody2">
            <h2 id="loginHeading">SIGN IN</h2>
            <label htmlFor="fn">User Name:</label>
            <input id="fn" type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div className="error" id="nameerror">
              {nameError}
            </div>

            <label htmlFor="pwd">Password:</label>
            <input id="pwd" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="error" id="pwderror">
              {passwordError}
            </div>

            <div id="bttn">
              <button id="submitbtn" type="submit">SUBMIT</button>
              <button id="cancelbtn" onClick={() => window.location.reload()}>CANCEL</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
