import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./pages/components/Header";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Private from "./pages/PrivatePage";
import authService from "./services/auth.service";

function App() {

  const [currentUser, setCurrentUser] = useState(undefined)
  useEffect(() => {
    const user = authService.getCurrentUser()

    if(user){
      setCurrentUser(user)
    }
  }, [])
  const logOut =()=>{
    authService.logout()
  }

  return (
    <>
      <Header logOut= {logOut} currentUser ={currentUser} />

      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/private" element={<Private />} />

      </Routes>
    </>


  )
}
export default App