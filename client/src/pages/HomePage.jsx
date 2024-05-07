import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AddPost from "../components/Addposter";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     PostService.getAllPublicPosts().then(
      (response) => {
        console.log(1);
        setPosts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <h3>
        <AddPost/>
        {posts.map((post, index) => (
          <div key={index}>{post.title} <button>delete</button><button>change</button></div>
        ))}
      </h3>
    </div>
  );
};

export default Home;