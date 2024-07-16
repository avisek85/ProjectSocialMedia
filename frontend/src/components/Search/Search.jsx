import React, { useContext, useState } from 'react'
import  "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from '@mui/material';
import { getAllUsers } from '../../Actions/User';
import User from '../User/User';
function Search() {

  const [name,setName]=useState("");

  const {users,loading:userloading }=useSelector((state)=>state.allUsers);

  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(getAllUsers(name));
  };
  return (
    <div className="search">
    <form className="searchForm" onSubmit={submitHandler}>
      <Typography variant="h3" style={{ padding: "2vmax" }}>
        social App
      </Typography>

      <input
        required
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    

      <Button disabled={userloading} type="submit">Search</Button>

      <div className='searchResults'>
    {
      users && users.map((user)=>(
        <User
          key={user._id}
          userId={user._id}
          name={user.name}
          avatar={user.avatar?.url}
          />
      ))
    }
    </div>
    </form>

   
  </div>  )
}

export default Search