import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";

import Posts from "../components/Post";
import "../";
const Home = (props) => {
  const  {HidePostChanger, setHidePostChanger}= props
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setHidePostChanger(false)
    PostService.getAllPublicPosts().then(
      (response) => {
        setPosts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
console.log(posts);
  return (
    <div>
      <Posts posts ={posts} HidePostChanger={HidePostChanger}/>
    </div>
  );
};

export default Home;
