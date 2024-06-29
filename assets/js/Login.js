import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const match = () => {
      if (!userName || !password) {
         toast.warning("Please Enter Details");
      } else if (userName === "admin" && password === "admin@2306") {
         toast.success("Welcome Admin");
         setTimeout(() => {
            navigate('/welcome');
         }, 2000);
      } else {
         toast.error("No Match");
      }
   };

   return (
      <center>
         <Header />
         <ToastContainer />
         <div id='box'>
            <h1>Admin Login Page</h1>
            <div>
               <label htmlFor="userName">Enter Name</label><br />
               <input 
                  onChange={(e) => setUserName(e.target.value)} 
                  value={userName} 
                  className="form-control" 
                  type="text" 
                  title="Please fill the Name" 
                  autoComplete='off' 
                  name='userName' 
                  required 
               />
            </div>
            <div>
               <label htmlFor="password">Enter Password</label><br />
               <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}  
                  className="form-control" 
                  type="password"  
                  autoComplete='off' 
                  name='password'  
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                  required
               />
            </div>
            <button className="btn-success" onClick={match} type="submit">Login</button>
         </div>
      </center>
   );
}

export default Login;
