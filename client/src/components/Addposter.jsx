import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postService from "../services/post.service";

function AddPost() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
     
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleLogin} >
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" placeholder="email"
          onChange={(e)=> setemail(e.target.value)}
          />

          <label htmlFor="Password">email</label>
          <input type="Password" name="Password" id="Password" 
          onChange={(e)=> setPassword(e.target.value)}
          />
          <button type="submit">add user</button>
        </form>
    </div>
  );
}
export default AddPost;
