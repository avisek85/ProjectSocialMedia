import React, { useEffect, useState } from "react";
import "./ForgotPassword.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { forgotPassword } from "../../Actions/User";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const {error,loading,message} = useSelector((state)=>state.like);

  function submitHandeler(e) {
    e.preventDefault();
    dispatch(forgotPassword(email));
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
    <div className="forgotPassword">
      <form className="forgotPasswordForm" onSubmit={submitHandeler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          social App
        </Typography>
        <input
        className="forgotPasswordInputs"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button disabled ={loading} type="submit">Send Token</Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
