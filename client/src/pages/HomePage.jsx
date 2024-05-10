import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AddPost from "../components/Addposter";
import { Link, Navigate } from "react-router-dom";
import UpdatePost from "../components/Update.post";
import image from "../image/Plague-doctor-girl-with-violin.jpg";
import Posts from "../components/Post";
import '../'
const Home = (props) => {
  const { posts, setPosts } = props.postUse;
  const [pageReloaded, setPageReloaded] = useState(false);
  console.log(posts);
  const delPost = async (post) => {
    try {
      const res = await fetch(
        `http://localhost:5000/posts/public/${post._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        console.log("Post deleted");
        // Update the state to remove the deleted post
        setPosts(posts.filter((p) => p._id !== post._id));
        // Reload the page only once
        // if (!pageReloaded) {
        //   setPageReloaded(true);
        // }
      } else {
        throw new Error("Post not deleted");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h3>
        <AddPost />
        <Posts posts={posts} delPost={delPost} />
      </h3>
    </div>
  );
};

export default Home;
