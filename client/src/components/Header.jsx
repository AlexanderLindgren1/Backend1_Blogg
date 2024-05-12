import React from "react";

function Header(props) {
  function handleReload() {
    window.location.reload();
  }

  return (
    <div>
      <ul>
        <li>
          <a href="/" onClick={handleReload}>Home</a>
        </li>
        {props.currentUser && (
          <li>
            <a href="/Profile">Profile</a>
          </li>
        )}

        {props.currentUser ? (
          <li>
            <a href="/" onClick={props.logOut}>Logout</a>
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}

        <li>
          <a href="/signUp">SignUp</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
