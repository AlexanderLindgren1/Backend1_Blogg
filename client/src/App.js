import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Private from "./pages/PrivatePage";
import authService from "./services/auth.service";
import UpdatePost from "./components/Update.post";
import postService from "./services/post.service";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPublicPosts().then(
      (response) => {
        setPosts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
    }
  }, [])
  const logOut = () => {
    authService.logout()
  }
  const postUse = { posts, setPosts }
  return (
    <>
      <Header logOut={logOut} currentUser={currentUser} />

      <Routes>
        <Route path="/" element={<Home postUse={postUse} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/private" element={<Private />} />
        <Route path="/public/:id" element={<UpdatePost postUse={postUse} />} />
      </Routes>
    </>


  )
}
export default App