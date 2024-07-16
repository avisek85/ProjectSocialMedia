import "./Register.css";
import { Avatar, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {loading,error} = useSelector((state)=>state.user);
  const alert = useAlert();

  const handleImageChange = (e) => { 
    const files = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(files);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name,email,avatar,password);
    dispatch(registerUser(name,email,password,avatar))
  };

  useEffect(()=>{
    if(error){
        alert.error(error);
        dispatch({type:"clearErrors"});
    }
  },[dispatch,error,alert])

  return (
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          social App
        </Typography>

        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" onChange={handleImageChange}/>
        <input
          required
          className="registerInputs"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          className="registerInputs"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="registerInputs"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Link to={"/"}>
          <Typography>Already Signed Up? Login Now</Typography>
        </Link>
        <Button disabled={loading} type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default Register;
