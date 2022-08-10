import React from "react";
import { useState } from "react";
import AuthService from "../services/auth.service";
const Profile2= () => {
  // const [currentUser,setCurrentUser ]= useState()
  // setCurrentUser(AuthService.getCurrentUser())
 
  return (
    <div className="container">
     <h1>hello {JSON.parse(localStorage.getItem("user")).username}</h1>
    </div>
  );
};

export default Profile2;
