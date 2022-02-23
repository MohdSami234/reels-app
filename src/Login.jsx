import { useContext } from "react";
import { Redirect } from "react-router-dom";
import {  signInWithGoogle } from "./firebase";

import { AuthContext } from "./AuthProvider";
import "./Login.css"

let Login = () => {
  let value = useContext(AuthContext);

  return (
    <div className="login-container">
      {value ? <Redirect to="/home" /> : ""}
     <h1 className="h1"><span className="material-icons-outlined">music_note</span>REELS</h1> 
      <h1 className="h1">ENJOY SHORT VIDEOS</h1>
       

      <button className="login"
        onClick={signInWithGoogle}
        type="submit"
         
      >
        Login With Google
      </button>
       
    </div>
  );
};

export default Login;