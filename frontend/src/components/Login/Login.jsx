import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/User";
import { useAlert } from "react-alert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const {error} =  useSelector((state)=>state.user)
  const {message} = useSelector((state)=>state.like);

  function loginHandeler(e) {
    e.preventDefault();
    dispatch(loginUser(email, password));
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error,message, dispatch]);


  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandeler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          social App
        </Typography>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link>
        <Link to="/register">
          <Typography>New User?</Typography>
        </Link>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
