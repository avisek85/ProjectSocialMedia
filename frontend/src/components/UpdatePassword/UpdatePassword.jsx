import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./UpdatePassword.css";
import { updatePassword } from "../../Actions/User";
import { useAlert } from "react-alert";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
const alert = useAlert();

const {error,loading,message} = useSelector((state)=>state.like)

  function submitHandeler(e) {
    e.preventDefault();
    dispatch(updatePassword(oldPassword,newPassword))
  }

  useEffect(()=>{
    if(error){
        alert.error(error);
        dispatch({type:"clearErrors"});
    }
    if(message){
        alert.success(message);
        dispatch({type:"clearMessage"});
    }

  },[dispatch,error,alert,message])

  return (
    <div className="updatePassword">
      <form className="updatePasswordForm" onSubmit={submitHandeler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          social App
        </Typography>

        <input
        className="updatePasswordInputs"
          type="password"
          placeholder="Old Password"
          required
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        />
        <input
        className="updatePasswordInputs"
          type="password"
          placeholder="New Password"
          required
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />

        <Button disabled={loading} type="submit">Change Password</Button>
      </form>
    </div>
  );
}

export default UpdatePassword;
