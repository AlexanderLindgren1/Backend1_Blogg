import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AddPost from "../components/Addposter";
import { useParams } from "react-router-dom";
const Home = () => {

  const [posts, setPosts] = useState([]);
  const { _id } = useParams()
  console.log(_id);

  useEffect(() => {
    PostService.getAllPublicPosts().then(
      (response) => {
        setPosts(response.data);

      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const delPost = async (post) => {
    console.log(post._id);
    const res = await fetch(`http://localhost:5000/posts/public/${post._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }
    )
    if (res.ok) {
      console.log("Post deleted");
    }
    else {
      throw new Error("post not deleted")
    }
  }

  const updatePost = async (post) => {
    <Update post={post}/>
  }

  return (
    <div>
      <h3>
        <AddPost />
        {posts.map((post, index) => (
          <div key={index}>{post.title}
            <button onClick={() => (delPost(post), window.location.reload())}>delete</button>
            <button onClick={()=>updatePost(post)}>Update</button></div>
        ))}
      </h3>
    </div>
  );
};

export default Home;