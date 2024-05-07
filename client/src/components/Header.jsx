import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Header(props) {

  console.log("currentUser", props.currentUser);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.currentUser && (
          <li>
            <Link to="/private">private</Link>
          </li>
        )}

        {props.currentUser ? (
          <li>

            <Link to="/" onClick={(props.logOut, console.log(1) )}>
              
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">login </Link>
          </li>
        )}

        <li>
          <Link to="/signUp">signUp</Link>
        </li>
 
      </ul>
    </div>
  );
}
export default Header;
