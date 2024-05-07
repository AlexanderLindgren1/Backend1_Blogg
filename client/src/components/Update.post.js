import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Update(props) {

    const updatePost = async (post) => {
        console.log(post._id);
        const res = await fetch(`http://localhost:5000/posts/public/${post._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" }
          
    
        }
        )
        if (res.ok) {
          console.log("Updated User");
        }
        else {
          throw new Error("post not updated")
        }
      }
  return (
    <>

    </>
  )
   

}
export default Update;
