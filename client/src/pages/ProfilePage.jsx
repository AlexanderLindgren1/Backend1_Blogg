import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import AddPost from "../components/Addposter";
import Posts from "../components/Post";


const Profile = (props) => {
  const  {HidePostChanger, setHidePostChanger}= props

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setHidePostChanger(true)
    PostService.getAllProfilePosts().then(
      (response) => {
        setPosts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div>
      <AddPost posts ={posts}/>
      <Posts posts ={posts} setPosts={setPosts}  HidePostChanger={HidePostChanger} />
    </div>
  );
};

export default Profile;
