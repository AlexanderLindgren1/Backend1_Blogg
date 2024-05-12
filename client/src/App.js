import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Profile from "./pages/ProfilePage";
import authService from "./services/auth.service";
import UpdatePost from "./components/Update.post";
import postService from "./services/post.service";
function App() {

 


  const [currentUser, setCurrentUser] = useState(undefined)
  const [HidePostChanger, setHidePostChanger] = useState(false)

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])
  const logOut = () => {
    authService.logout()
  }
  return (
    <>
      <Header logOut={logOut} currentUser={currentUser} />

      <Routes>
        <Route path="/" element={<Home setHidePostChanger={setHidePostChanger } HidePostChanger={HidePostChanger} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile  setHidePostChanger={setHidePostChanger} HidePostChanger={HidePostChanger}/>} />
        <Route path="/profile/:id" element={<UpdatePost />} />
      </Routes>
    </>


  )
}
export default App