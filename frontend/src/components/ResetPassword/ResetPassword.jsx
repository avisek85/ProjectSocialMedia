import "./ResetPassword.css";
import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../Actions/User";
import { Link, useParams } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();

  const { error, loading, message } = useSelector((state) => state.like);

  function submitHandeler(e) {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword));
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
  }, [dispatch, error, alert, message]);

  return (
    <div className="resetPassword">
      <form className="resetPasswordForm" onSubmit={submitHandeler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          social App
        </Typography>

        <input
          className="resetPasswordInputs"
          type="password"
          placeholder="New Password"
          required
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />

        <Link to={"/forgot/password"}>
          <Typography>Request Another Token</Typography>
        </Link>
        <Typography>Or</Typography>
        <Link to={"/"}>
          <Typography>Login</Typography>
        </Link>

        <Button disabled={loading} type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
}

export default ResetPassword;
